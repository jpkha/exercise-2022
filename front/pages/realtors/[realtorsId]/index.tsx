import {REALTORS_MESSAGES_PAGE_API} from '../../../services/constants';
import {MessageDetail} from '../../../components/MessageDetail/MessageDetail';

function RealtorsDetail() {
  return <MessageDetail/>
}

export async function getServerSideProps({params, query}) {
  const realtor = params.realtorsId;
  const page = query.page || 1;
  const sort = 'desc'
  const res = await fetch(REALTORS_MESSAGES_PAGE_API(realtor, page, sort));
  const messagesData = await res.json();
  return {
    props: {messagesData}
  }
}

export default RealtorsDetail;
