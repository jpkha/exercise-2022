import styled from 'styled-components'
import {Realtor} from '../../model/api/realtor'
import {SelectRealtors} from './SelectRealtors';
import {useRouter} from 'next/router';
import {greyBackgroundBoxColor, primaryColor} from '../../styles/variables';
import {LogoMeilleursAgents} from './LogoMeilleursAgents';
import {useContext} from 'react';
import {RealtorsContext} from '../../context/realtors-context';

const HeaderContainer = styled.header`
  height: 60px;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgb(58 58 58 / 30%);
  position: relative;
  z-index: 1;
`


const UnreadMessageContainer = styled.div`
  flex: 0 0 auto;
  color: white;
  background-color: ${({emptyBox}) => emptyBox ? greyBackgroundBoxColor : primaryColor};
  margin: 0 12px;
  padding: 5px 12px;
  margin: 0 12px;
  border-radius: 8px;

  > i {
    padding-right: 10px;
  }
`
export const HeaderApp = () => {
  const router = useRouter();
  const {realtors} = useContext(RealtorsContext);
  const realtorsId = router.query.realtorsId?.toString();
  const selectedRealtor = realtors.find((realtor: Realtor) => realtorsId === realtor.id.toString());
  return (
    <HeaderContainer>
      <LogoMeilleursAgents realtorsId={realtorsId}/>
      {selectedRealtor &&
      <UnreadMessageContainer emptyBox={selectedRealtor.unread_messages === 0} data-testid="unread-message">
          <i className="mypro-icon mypro-icon-inbox"></i>{selectedRealtor.unread_messages}
      </UnreadMessageContainer>
      }
      <SelectRealtors realtors={realtors}/>
    </HeaderContainer>
  )
}
