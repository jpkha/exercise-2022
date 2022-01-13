import {MessageProps} from '../../model/messageProps';
import {MessageGenericCard} from './MessageGenericCard';

export const MessagePhoneCard = ({message}: MessageProps) => {
  return <MessageGenericCard
    message={{...message,
      title: `${message.contact.firstname} ${message.contact.lastname}`,
      phone: message.contact.phone,
      messageContentTitle:'Message vocal sur votre vitrine Meilleurs Agents',
    }}
  />
}
