import {Realtor} from '../../model/api/realtor';
import {useRouter} from 'next/router';
import {ChangeEvent} from 'react';
import styled from 'styled-components';
import { SrOnly } from '../../styles/utils';

const SrOnlyLabel = styled.label`
  ${SrOnly}
`

const SelectRealtorsContainer = styled.div`
  flex: 0 0 auto;
  padding-right: 12px;
`

const Select = styled.select`
  max-width: 110px;
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

  return <SelectRealtorsContainer>
    <SrOnlyLabel htmlFor="agency-select">Choississez une agence:</SrOnlyLabel>
    <Select data-cy="select-realtors" value={selectedRealtor} name="agencies" id="agency-select" onChange={handleSelectAgencies}>
      <option value="">-- Choissisez une option--</option>
      {realtors?.map((agency: Realtor) =>
        <option key={agency.id} value={agency.id}> {agency.name.replace(/#/g, '')}</option>)}
    </Select>
  </SelectRealtorsContainer>
}
