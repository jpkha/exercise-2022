import useSWR, {SWRResponse} from 'swr';
import {
  REALTORS_API,
  REALTORS_MESSAGES_API,
  REALTORS_MESSAGES_PAGE_API,
  REALTORS_SPECIFIC_MESSAGES_API
} from './constants';
import axios, {AxiosResponse} from 'axios';
import {Realtor} from '../model/api/realtor';
import {Message} from '../model/api/message';

const realtorsFetcher = (url: string) => axios.get(url).then(({data}: AxiosResponse<Realtor[]>) => data as Realtor[]);
const realtorsMessagesFetcher = (url: string) => axios.get(url).then(({data}: AxiosResponse<Message[]>) => data as Message[]);
const realtorsSpecificMessagesFetcher = (url: string) => axios.get(url).then(({data}: AxiosResponse<Message>) => data as Message);

export const GetRealtors = (): SWRResponse<Realtor[]> => useSWR(
  REALTORS_API,
  realtorsFetcher
)
export const GetRealtorsMessages = (realtorId: string): SWRResponse<Message[]> => useSWR(
  REALTORS_MESSAGES_API(realtorId),
  realtorsMessagesFetcher
)

export const GetRealtorsMessagesByPage = (realtorId: string, page: number): SWRResponse<Message[]> => useSWR(
  REALTORS_MESSAGES_PAGE_API(realtorId, page),
  realtorsMessagesFetcher
)

export const GetSpecificRealtorsMessages = (realtorId: string, messageId: string): SWRResponse<Message> => useSWR(
  REALTORS_SPECIFIC_MESSAGES_API(realtorId, messageId),
  realtorsSpecificMessagesFetcher
)
