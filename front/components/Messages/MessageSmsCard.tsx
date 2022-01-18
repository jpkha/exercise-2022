import {MessageProps} from '../../model/messageProps';
import {MessageGenericCard} from './MessageGenericCard';

export const MessageSmsCard = ({message, handleClickMessageCard}: MessageProps) => {
  const title = message.contact.firstname && message.contact.lastname ? `${message.contact.firstname} ${message.contact.lastname}` : ''
  return <MessageGenericCard
    genericMessage= {{...message,
      title,
      phone: message.contact.phone,
      messageContentTitle: 'SMS sur votre vitrine Meilleurs Agents',
      description:`SMS ${message.read ? 'lu' : 'non lu'}`
    }}
    handleClickMessageCard={handleClickMessageCard}
  />
}
