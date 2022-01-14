import {MessageProps} from '../../model/messageProps';
import {MessageEmailCard} from './MessageEmailCard';
import {MessageSmsCard} from './MessageSmsCard';
import {MessagePhoneCard} from './MessagePhoneCard';

export const MessageCard = ({message, handleClickMessageCard}: MessageProps) => {
  switch (message.type) {
    case 'email':
      return <MessageEmailCard message={message} handleClickMessageCard={handleClickMessageCard}/>
    case 'sms':
      return <MessageSmsCard message={message} handleClickMessageCard={handleClickMessageCard}/>
    case 'phone':
      return <MessagePhoneCard message={message} handleClickMessageCard={handleClickMessageCard}/>
    default:
      return <div>Error, need to be checked</div>
  }
}
