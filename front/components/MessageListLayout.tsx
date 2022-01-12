import {MessagesListContainer} from './MessageListContainer';
import {useRouter} from 'next/router';
import {Message} from '../model/message';

const MessageListLayout = ({messagesData}: { messagesData: Message[] }) => {
  const router = useRouter();
  const realtorsId = router.query.realtorsId as string;

  const handleOnClickMessage = (message: string) => {
    router.push(`/realtors/${realtorsId}/messages/${message}`, undefined, {shallow: true});
  }
  return (<MessagesListContainer messagesData={messagesData} handleOnClickMessage={handleOnClickMessage}/>)
};

export default MessageListLayout;
