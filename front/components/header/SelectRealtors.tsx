import {Realtor} from '../../model/api/realtor';
import {useRouter} from 'next/router';
import {ChangeEvent} from 'react';
import styled from 'styled-components';
import { SrOnly } from '../../styles/utils';

const SrOnlyLabel = styled.label`
  ${SrOnly}
`

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
    <SrOnlyLabel htmlFor="agency-select">Choississez une agence:</SrOnlyLabel>
    <select value={selectedRealtor} name="agencies" id="agency-select" onChange={handleSelectAgencies}>
      <option value="">-- Choissisez une option--</option>
      {realtors?.map((agency: Realtor) =>
        <option key={agency.id} value={agency.id}> {agency.name.replace(/#/g, '')}</option>)}
    </select>
  </>
}
