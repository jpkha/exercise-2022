import {Message} from './api/message';

export interface GenericMessageProps {
  genericMessage: GenericMessage
}

interface GenericMessage extends Message  {
  messageContentTitle: string,
  messageContentBody: string,
  description: string,
  phone: string
}
