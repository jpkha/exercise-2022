import {Message} from '../../model/api/message';
import {useContext, useEffect, useState} from 'react';
import {Router, useRouter} from 'next/router';
import styled from 'styled-components';
import {MessageCard} from '../Messages/MessageCard';
import {deleteDuplicateMessage} from '../../utils/deleteDuplicateMessages';
import {RealtorsContext} from '../../context/realtors-context';
import {AxiosResponse} from 'axios';
import {hasReadSpecificMessages} from '../../services/realtors.service';
import {replaceMessageForANewOne} from '../../utils/replaceMessageForANewOne';
import {devicesMaxWidth} from '../../styles/variables';

interface MessagesListContainerProps {
  readonly messagesData: Message[];
  readonly handleOnClickMessage: ((id: string) => void);
}

const MessagesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: auto;
  border-right: 1px solid #BABBBA;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 1;
  flex: 0 0 23.4375rem;
  list-style-type: none;
  @media ${devicesMaxWidth.tablet} {
    flex: 1 1 auto;
  }
}
`

export const MessagesListContainer = ({messagesData}: MessagesListContainerProps) => {
  const router = useRouter();
  const realtorsId = router.query.realtorsId?.toString() || '';
  const [selectedRealtor, setSelectedRealtor] = useState('');
  const [messages, setMessages] = useState([] as Message[]);
  const [page, setPage] = useState('1');
  const [messageListFullyLoaded, setMessageListFullyLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
    }
  }, [])

  useEffect(() => {
    if ((messagesData && !messageListFullyLoaded) || selectedRealtor !== realtorsId) {
      if (selectedRealtor !== realtorsId) {
        manageFirstIncomingMessages();
      } else {
        manageFollowingMessages();
      }
      document.getElementById('message-list-container')?.removeEventListener('scroll', handleScroll);
      document.getElementById('message-list-container')?.addEventListener('scroll', handleScroll);
    }
    if (messagesData?.length === 0) {
      setMessageListFullyLoaded(true);
      document.getElementById('message-list-container')?.removeEventListener('scroll', handleScroll);
    }
    return () => {
      document.getElementById('message-list-container')?.removeEventListener('scroll', handleScroll)
    }
  }, [messagesData, selectedRealtor, loading])


  const handleScroll = () => {
    const listContainer = document.getElementById('message-list-container');
    const lastMessagesLoaded = listContainer?.querySelector('li:last-child') as HTMLElement;

    if (lastMessagesLoaded && selectedRealtor === realtorsId) {
      const listContainerOffset = listContainer.clientHeight + listContainer.scrollTop;
      if (listContainerOffset > lastMessagesLoaded.offsetTop && !loading) {
        callNewMessagesPage();
      }
    }
  }

  const callNewMessagesPage = () => {
    const query = router.query;
    const newPage = parseInt(page) + 1;
    setPage(newPage.toString());
    query.page = newPage.toString();
    router.push({
      pathname: router.pathname,
      query
    }, undefined, {
      scroll: false
    })
  }

  const manageFirstIncomingMessages = () => {
    setSelectedRealtor(realtorsId);
    setPage('1');
    setMessageListFullyLoaded(false);
    if(messagesData) {
      setMessages([...messagesData]);
    } else {
      setMessages([]);
    }
  }

  const manageFollowingMessages = () => {
    setMessages(deleteDuplicateMessage([...messages, ...messagesData]));
  }

  const {realtorHasReadOneMessage} = useContext(RealtorsContext);
  const handleClickMessageCard = (message: Message): void => {
    if (realtorsId && !message.read) {
      hasReadSpecificMessages(realtorsId, message).then(({data}: AxiosResponse<Message>) => {
        setMessages(replaceMessageForANewOne(messages, data));
        realtorHasReadOneMessage(realtorsId);
      });
    }
  }
  return <MessagesContainer id="message-list-container" data-cy="message-list-container">
    {messages && messages.map((message: Message) => <MessageCard key={message.id} message={message}
                                                                 handleClickMessageCard={() => handleClickMessageCard(message)}/>)}
    {loading && <h3 style={{textAlign: 'center'}}>Loading...</h3>}
  </MessagesContainer>
}
