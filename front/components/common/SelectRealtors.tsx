import {Realtor} from '../../model/realtor';
import {useRouter} from 'next/router';
import {ChangeEvent} from 'react';

export const SelectRealtors = ({realtors}: { realtors: Realtor[] }) => {
  const router = useRouter();

  const handleSelectAgencies = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const realtorId = event.target.value;
    router.push(`/realtors/${realtorId}`);
  };

  let selectedRealtor = '';
  if (router.query.realtorsId) {
    selectedRealtor = router.query.realtorsId.toString();
  }

  return <>
    <label htmlFor="agency-select">Choississez une agence:</label>
    <select value={selectedRealtor} name="agencies" id="agency-select" onChange={handleSelectAgencies}>
      <option value="">-- Choissisez une option--</option>
      {realtors?.map((agency: Realtor) =>
        <option value={agency.id}> {agency.id}</option>)}
    </select>
  </>
}
