import {useRouter} from 'next/router';
import {GetSpecificRealtorsMessages} from '../../../../services/realtors.service';
import {REALTORS_MESSAGES_PAGE_API} from '../../../../services/constants';
import {MessageDetail} from '../../../../components/MessageDetail';

function MessagesDetail() {
  const router = useRouter();
  const {messageId, realtorsId}: { messageId: string, realtorsId: string } = router.query;

  const {data: messageDetail, error: messageError} = GetSpecificRealtorsMessages(realtorsId, messageId);

  if (!messageDetail) return <div>Loading...</div>;

  return <MessageDetail messageDetail={messageDetail}/>
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

export default MessagesDetail;
