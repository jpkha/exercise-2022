import {REALTORS_MESSAGES_PAGE_API, REALTORS_SPECIFIC_MESSAGES_API} from '../../../../services/constants';
import {MessageDetail} from '../../../../components/MessageDetail/MessageDetail';

function MessagesDetail({messageDetail}) {
  return <MessageDetail messageDetail={messageDetail}/>
}

export async function getServerSideProps({params, query}) {

  const realtor = params.realtorsId;
  const messageId = params.messageId;
  const page = query.page || 1;
  const sort = "desc";
  const [messagesDataRes, messagesDetailDataRes] = await Promise.all([
    fetch(REALTORS_MESSAGES_PAGE_API(realtor, page, sort)),
    fetch(REALTORS_SPECIFIC_MESSAGES_API(realtor, messageId))
  ]);
  const [messagesData, messageDetail] = await Promise.all([
    messagesDataRes.json(),
    messagesDetailDataRes.json()
  ]);

  return {
    props: {messagesData, messageDetail}
  }
}

export default MessagesDetail;
