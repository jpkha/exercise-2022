import {createContext, useContext, useState} from 'react';

export const MessagesListContext = createContext({
  messages: [],
  pages: 1,
  resetMessages: () => {
  },
  setMessages: () => {}
});

export function MessagesListProvider({children, selectedRealtor}) {
  const [messages, setMessages] = useState([]);
  const [pages, setPages] = useState(1);

  const resetMessages = () => {
    setMessages([]);
    setPages(1);
  }
  const value = {
    messages,
    pages,
    setMessages,
    resetMessages,
  }

  return (
    <MessagesListContext.Provider value={value}>
      {children}
    </MessagesListContext.Provider>
  )
}

export function useMessagesListContext(): any {
  return useContext(MessagesListContext);
}
