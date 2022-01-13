import {MessageGenericCard} from './MessageGenericCard';
import {MessageProps} from '../../model/messageProps';

export const MessageEmailCard = ({message}: MessageProps) => {
  return <MessageGenericCard
    message={{...message,
      title: `${message.contact.firstname} ${message.contact.lastname}`,
      messageContentTitle:'Message sur votre vitrine Meilleurs Agents',
      icon : (message.read ? <i className="mypro-icon mypro-icon-mail"></i> : <i className="mypro-icon mypro-icon-inbox"></i>)
    }}
  />
}
