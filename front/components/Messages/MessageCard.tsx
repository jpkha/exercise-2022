import {MessageProps} from '../../model/messageProps';
import {MessageEmailCard} from './MessageEmailCard';
import {MessageSmsCard} from './MessageSmsCard';
import {MessagePhoneCard} from './MessagePhoneCard';

export const MessageCard = ({message}: MessageProps) => {
  switch (message.type) {
    case 'email':
      return <MessageEmailCard message={message}/>
    case 'sms':
      return <MessageSmsCard message={message}/>
    case 'phone':
      return <MessagePhoneCard message={message}/>
    default:
      return <div>Error, need to be checked</div>
  }
}
