import {MessageGenericCard} from './MessageGenericCard';
import {MessageProps} from '../../model/messageProps';

export const MessageEmailCard = ({message, handleClickMessageCard}: MessageProps) => {
  const title = message.contact.firstname && message.contact.lastname ? `${message.contact.firstname} ${message.contact.lastname}` : ''
  return <MessageGenericCard
    genericMessage={{...message,
      title,
      messageContentTitle:'Message sur votre vitrine Meilleurs Agents',
      description:`Message ${message.read ? 'lu' : 'non lu'}`
    }}
    handleClickMessageCard={handleClickMessageCard}
  />
}
