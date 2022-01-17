import {createContext, useContext, useState} from 'react';
import {Realtor} from '../model/api/realtor';

const realtorsContextDefaultValue = {
  realtors: [],
  realtorHasReadOneMessage: (realtorId: string) => {
  }
};

export const RealtorsContext = createContext(realtorsContextDefaultValue);


export const RealtorsProvider = ({children, realtors: realtorsRes}) => {

  const [realtors, setRealtors] = useState(realtorsRes);
  const realtorHasReadOneMessage = (realtorId: string) => {
    const index = realtors.findIndex((realtor: Realtor) => realtor.id.toString() === realtorId);
    realtors[index].unread_messages -= 1;
  }

  const value = {
    realtors,
    setRealtors,
    realtorHasReadOneMessage
  }
  return <RealtorsContext.Provider value = {value}> {children} </RealtorsContext.Provider>

}

export function useRealtorsContext() {
  return useContext(RealtorsContext);
}
