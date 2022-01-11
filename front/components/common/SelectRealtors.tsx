import {Realtor} from '../../model/realtor';
import {useRealtorsContext} from '../../context/realtors-context';
import {useRouter} from 'next/router';
import {ChangeEvent} from 'react';

export const SelectRealtors = () => {
  const {realtors, selectedRealtor, setRealtor} = useRealtorsContext();
  const router = useRouter();

  const handleSelectAgencies = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    console.log('event select');
    const realtorId = event.target.value;
    setRealtor(event.target.value);
    router.push(`/realtors/${realtorId}`);
  };

  return <>
    <label htmlFor="agency-select">Choississez une agence:</label>
    <select  value={selectedRealtor} name="agencies" id="agency-select" onChange={handleSelectAgencies}>
      <option value="">-- Choissisez une option--</option>
      {realtors?.map((agency: Realtor) =>
        <option value={agency.id}> {agency.id}</option>)}
    </select>
  </>
}
