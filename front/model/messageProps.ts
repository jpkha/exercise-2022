import {Message} from './api/message';

export interface MessageProps {
  readonly message: Message;
  readonly handleClickMessageCard: () => void;
}
