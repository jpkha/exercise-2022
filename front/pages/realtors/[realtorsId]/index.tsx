import {REALTORS_MESSAGES_PAGE_API} from '../../../services/constants';
import {Message} from '../../../model/message';

function RealtorsDetail({messagesData}: { messagesData: Message[] }) {

  return <></>
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
