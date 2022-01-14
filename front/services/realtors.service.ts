import {Message} from '../model/api/message';
import axios, {AxiosResponse} from 'axios';
import {REALTORS_SPECIFIC_MESSAGES_API} from './constants';
import {MessagePatchBody} from '../model/messagePatchBody';


export const hasReadSpecificMessages = (realtorsId: string, message: Message): Promise<AxiosResponse<Message>> => {
  const {id, ...newMessage} = message;
  const patchBody: MessagePatchBody = {
    ...newMessage,
    read: true
  }
  return axios.patch(REALTORS_SPECIFIC_MESSAGES_API(realtorsId, message.id), patchBody)
}
