import {useRouter} from 'next/router';
import {SelectRealtors} from '../../../components/common/SelectRealtors';
import {useRealtorsContext} from '../../../context/realtors-context';
import {MessagesListContainer} from '../../../components/MessageListContainer';
import {REALTORS_MESSAGES_PAGE_API} from '../../../services/constants';

function RealtorsDetail({messagesData}) {
  const {selectedRealtor, setRealtor} = useRealtorsContext();
  const router = useRouter();
  const realtorsId = router.query.realtorsId as string;
  if (selectedRealtor !== realtorsId) {
    setRealtor(realtorsId);
  }

  const handleOnClickMessage = (message) => {
    router.push(`/realtors/${selectedRealtor}/messages/${message}`, undefined, {shallow: true});
  }


  return <>
    <SelectRealtors/>
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
