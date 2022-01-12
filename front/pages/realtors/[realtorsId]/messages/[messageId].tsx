import {useRouter} from 'next/router';
import {SelectRealtors} from '../../../../components/common/SelectRealtors';
import {MessagesListContainer} from '../../../../components/MessageListContainer';
import {GetSpecificRealtorsMessages} from '../../../../services/realtors.service';
import {REALTORS_MESSAGES_PAGE_API} from '../../../../services/constants';
import {Message} from '../../../../model/message';

function MessagesDetail({messagesData}: {messagesData : Message[]}) {
  const router = useRouter();
  const {messageId, realtorsId}: { messageId: string, realtorsId: string } = router.query;

  const {data: messageDetail, error: messageError} = GetSpecificRealtorsMessages(realtorsId, messageId);

  const handleOnClickMessage = (message: string) => {
    router.push(`/realtors/${realtorsId}/messages/${message}`, undefined, {shallow: true, scroll: false});
  }
  if (!messageDetail) return <div>Loading...</div>;

  return <>
    <div style={{display: 'flex'}}>
      <MessagesListContainer messagesData={messagesData} handleOnClickMessage={handleOnClickMessage}/>
      <p style={{color: 'red'}}>
        {messageDetail?.body}
      </p>
    </div>
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

export default MessagesDetail;
