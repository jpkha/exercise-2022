import {Message} from '../model/message';
import {MessageCard} from './MessageCard';
import {useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import {useRealtorsContext} from '../context/realtors-context';
import styled from 'styled-components';

interface MessagesListContainerProps {
  readonly messagesData: Message[]
  readonly handleOnClickMessage: (id: string) => {}
}

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  max-height: 800px;
  overflow: auto;
`

export const MessagesListContainer = ({messagesData, handleOnClickMessage}: MessagesListContainerProps) => {
  console.log(messagesData);
  const firstUpdate = useRef(true);
  const router = useRouter();
  const {selectedRealtor, setRealtor} = useRealtorsContext();
  const realtorsId = router.query.realtorsId as string;
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState('1');
  console.log(messages);
  const handleScroll = () => {
    const lastMessagesLoaded = document.querySelector(
      'div:last-child'
    )
    if (lastMessagesLoaded) {
      const lastMessagesLoadedOffset = lastMessagesLoaded.offsetTop + lastMessagesLoaded.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      if (pageOffset > lastMessagesLoadedOffset) {
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
    }
  }

  useEffect(() => {
    if (messagesData) {
      if (selectedRealtor !== realtorsId || firstUpdate.current) {
        setRealtor(realtorsId);
        setMessages([...messagesData]);
        firstUpdate.current = false;
      } else {
        messages.push(...messagesData);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [messagesData])

  return <MessagesContainer>
    {messages && messages.map((message: Message) => <MessageCard key={message.id} message={message}
                                                                 handleOnClickMessage={handleOnClickMessage}/>)}
  </MessagesContainer>
}
