import styled from "styled-components"
import { Realtor } from "../../model/realtor"
import {SelectRealtors} from './SelectRealtors';

const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgb(58 58 58 / 30%);
`

const LogoContainer = styled.div`
  flex: 1 0 auto;
`

export const HeaderApp = ({realtors}: { realtors: Realtor[] }) => {
  return (
    <HeaderContainer>
      <LogoContainer>Logo</LogoContainer>
      <div> N3 </div>
      <div>
        <SelectRealtors realtors={realtors}/>
      </div>
    </HeaderContainer>
  )
}
