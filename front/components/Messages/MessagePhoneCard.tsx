import {MessageProps} from '../../model/messageProps';
import {MessageGenericCard} from './MessageGenericCard';

export const MessagePhoneCard = ({message, handleClickMessageCard}: MessageProps) => {
  return <MessageGenericCard
    genericMessage={{...message,
      title: `${message.contact.firstname} ${message.contact.lastname}`,
      phone: message.contact.phone,
      messageContentTitle:'Message vocal sur votre vitrine Meilleurs Agents',
      description:`Message vocal ${message.read ? 'lu' : 'non lu'}`
    }}
    handleClickMessageCard={handleClickMessageCard}
  />
}
