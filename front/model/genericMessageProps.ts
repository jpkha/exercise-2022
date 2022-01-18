import {Message} from './api/message';

export interface GenericMessageProps {
  readonly genericMessage: GenericMessage,
  readonly handleClickMessageCard?: () => void
}

interface GenericMessage extends Message  {
  title: string,
  messageContentTitle: string,
  description: string,
  phone?: string
}
