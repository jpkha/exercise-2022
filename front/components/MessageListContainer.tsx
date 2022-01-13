import {Message} from '../model/api/message';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import {MessageCard} from './Messages/MessageCard';
import {deleteDuplicateMessage} from '../utils/deleteDuplicateMessages';
import {orderByDate} from '../utils/orderByDate';

interface MessagesListContainerProps {
  readonly messagesData: Message[];
  readonly handleOnClickMessage: ((id: string) => void);
}

const MessagesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: 0 0 375px;
  border-right: 1px solid #BABBBA;
  padding: 0;
  margin: 0;
`

export const MessagesListContainer = ({messagesData}: MessagesListContainerProps) => {
  const router = useRouter();
  const realtorsId = router.query.realtorsId?.toString() || '';
  const [selectedRealtor, setSelectedRealtor] = useState('');
  const [messages, setMessages] = useState([] as Message[]);
  const [page, setPage] = useState('1');
  const [messageListFullyLoaded, setMessageListFullyLoaded] = useState(false);

  const handleScroll = () => {
    const listContainer = document.getElementById('message-list-container');
    const lastMessagesLoaded = listContainer?.querySelector('li:last-child') as HTMLElement;

    if (lastMessagesLoaded && selectedRealtor === realtorsId) {
      const listContainerOffset = listContainer.clientHeight + listContainer.scrollTop;
      if (listContainerOffset > lastMessagesLoaded.offsetTop) {
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
    setMessages(orderByDate([...messagesData]));
  }

  const manageFollowingMessages = () => {
    setMessages(orderByDate(deleteDuplicateMessage([...messages, ...messagesData])));
  }

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
    if (messagesData.length === 0) {
      setMessageListFullyLoaded(true);
      document.getElementById('message-list-container')?.removeEventListener('scroll', handleScroll);
    }
    return () => {
      document.getElementById('message-list-container')?.removeEventListener('scroll', handleScroll)
    }
  }, [messagesData, selectedRealtor])


  return <MessagesContainer id="message-list-container">
    {messages && messages.map((message: Message) => <MessageCard key={message.id} message={message}/>)}
  </MessagesContainer>
}
