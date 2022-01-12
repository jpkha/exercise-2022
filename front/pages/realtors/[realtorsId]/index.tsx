import {useRouter} from 'next/router';
import {MessagesListContainer} from '../../../components/MessageListContainer';
import {REALTORS_MESSAGES_PAGE_API} from '../../../services/constants';
import {Message} from '../../../model/message';

function RealtorsDetail({messagesData}: {messagesData: Message[]}) {
  const router = useRouter();
  const realtorsId = router.query.realtorsId as string;

  const handleOnClickMessage = (message: string) => {
    router.push(`/realtors/${realtorsId}/messages/${message}`, undefined, {shallow: true});
  }


  return <>
    <MessagesListContainer messagesData={messagesData} handleOnClickMessage={handleOnClickMessage}/>
  </>
}

export async function getServerSideProps({params, query}) {
  const realtor = params.realtorsId;
  const page = query.page || 1;
  const res = await fetch(REALTORS_MESSAGES_PAGE_API(realtor, page));
  const messagesData = await res.json();
  return {
    props: {messagesData}
  }
}

export default RealtorsDetail;
