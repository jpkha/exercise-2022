import {MessageProps} from '../../model/messageProps';
import {MessageGenericCard} from './MessageGenericCard';

export const MessageSmsCard = ({message, handleClickMessageCard}: MessageProps) => {
  return <MessageGenericCard
    genericMessage= {{...message,
      title: `${message.contact.firstname} ${message.contact.lastname}`,
      phone: message.contact.phone,
      messageContentTitle: 'SMS sur votre vitrine Meilleurs Agents'
    }}
    handleClickMessageCard={handleClickMessageCard}
  />
}
