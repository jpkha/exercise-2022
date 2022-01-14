import {MessageGenericCard} from './MessageGenericCard';
import {MessageProps} from '../../model/messageProps';

export const MessageEmailCard = ({message, handleClickMessageCard}: MessageProps) => {
  return <MessageGenericCard
    genericMessage={{...message,
      title: `${message.contact.firstname} ${message.contact.lastname}`,
      messageContentTitle:'Message sur votre vitrine Meilleurs Agents'
    }}
    handleClickMessageCard={handleClickMessageCard}
  />
}
