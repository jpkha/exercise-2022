import {MessageProps} from '../../model/messageProps';
import {MessageGenericCard} from './MessageGenericCard';

export const MessageSmsCard = ({message}: MessageProps) => {
  return <MessageGenericCard
    message= {{...message,
      title: `${message.contact.firstname} ${message.contact.lastname}`,
      phone: message.contact.phone,
      messageContentTitle: 'SMS sur votre vitrine Meilleurs Agents',
      icon: (<i className="mypro-icon mypro-icon-sms"></i>)
    }}
  />
}
