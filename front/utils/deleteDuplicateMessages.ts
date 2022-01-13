import {Message} from '../model/api/message';

export const deleteDuplicateMessage = (messages: Message[]): Message[] => {
  return messages.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i);
}
