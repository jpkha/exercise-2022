import {MessagesListContainer} from './MessageListContainer';
import {Message} from '../../model/api/message';

const MessageListLayout = ({messagesData}: { messagesData: Message[] }) => {
  return (<MessagesListContainer messagesData={messagesData}/>)
};

export default MessageListLayout;
