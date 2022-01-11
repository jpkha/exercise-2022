import {createContext, useContext, useMemo, useState} from 'react';
import {GetRealtors} from '../services/realtors.service';
import {MessagesListContext, MessagesListProvider} from './messages-list-context';

const realtorsContextDefaultValue = {
  realtors: [],
  selectedRealtor: '',
  error: '',
  setRealtor: (realtorId: string) => {}
};

export const RealtorsContext = createContext(realtorsContextDefaultValue);


export function RealtorsProvider({children}) {
  // const {data: realtors, error} = GetRealtors();
  const realtors = [
    {
      "id": 101,
      "logo": "http://placehold.it/100x100?text=Agence+101",
      "name": "Agence #101",
      "unread_messages": 73
    },
    {
      "id": 102,
      "logo": "http://placehold.it/100x100?text=Agence+102",
      "name": "Agence #102",
      "unread_messages": 77
    },
    {
      "id": 103,
      "logo": "http://placehold.it/100x100?text=Agence+103",
      "name": "Agence #103",
      "unread_messages": 79
    }];

  const [selectedRealtor, setRealtor] = useState('');

  const value = useMemo(() => ({
    realtors,
    selectedRealtor,
    setRealtor,
  }), [realtors, selectedRealtor]);

  return (
    <RealtorsContext.Provider value={value}>
      <MessagesListProvider selectedRealtor={selectedRealtor}>
        {children}
      </MessagesListProvider>
    </RealtorsContext.Provider>
  )
}

export function useRealtorsContext() {
  return useContext(RealtorsContext);
}
