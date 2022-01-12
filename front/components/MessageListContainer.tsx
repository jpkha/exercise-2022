import {Message} from '../model/message';
import {MessageCard} from './MessageCard';
import {useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';

interface MessagesListContainerProps {
  readonly messagesData: Message[];
  readonly handleOnClickMessage: ((id: string) => void);
}

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: 1 1 auto;
  max-width: 375px;
`

export const MessagesListContainer = ({messagesData, handleOnClickMessage}: MessagesListContainerProps) => {
  const firstUpdate = useRef(true);
  const router = useRouter();
  const [selectedRealtor, setRealtor] = useState('');
  const realtorsId = router.query.realtorsId as string;
  const [messages, setMessages] = useState([] as Message[]);
  const [page, setPage] = useState('1');
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
      if (selectedRealtor !== realtorsId) {
        setRealtor(realtorsId);
        setMessages([...messagesData]);
      } else {
        setMessages([...messages, ...messagesData].filter((v,i,a)=>a.findIndex(t=>(t.id===v.id))===i))
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [messagesData])

  return <MessagesContainer id="messageContainer">
    {messages && messages.map((message: Message) => <MessageCard key={message.id} message={message}
                                                                 handleOnClickMessage={handleOnClickMessage}/>)}
  </MessagesContainer>
}
