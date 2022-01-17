import {Message} from '../model/api/message';

export const replaceMessageForANewOne = (messages: Message[], newMessage: Message): Message[] => {
  const index = messages.findIndex(message => (message.id === newMessage.id));
  messages[index] = newMessage;
  return messages;
}
