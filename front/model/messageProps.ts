import {Message} from './api/message';

export interface MessageProps {
  readonly message: Message;
  handleClickMessageCard: () => void;
}
