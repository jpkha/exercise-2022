import styled from 'styled-components';
import {devicesMaxWidth, greyBackgroundColor} from '../../styles/variables';
import {Message} from '../../model/api/message';
import {MessageHeader} from './MessageHeader';
import {MessageBody} from './MessageBody';
import {MessageDetailsBorder} from '../../styles/utils';

const MessageDetailContainer = styled.section`
  ${MessageDetailsBorder};
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  background-color: ${greyBackgroundColor};
  overflow: auto;
  @media ${devicesMaxWidth.tablet} {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: ${({isMessage}) => isMessage ? '10' : '-1'};
    right: 0;
  }

`
export const MessageDetail = ({messageDetail}: { messageDetail: Message }) => {
  return <MessageDetailContainer isMessage={!!messageDetail}>
    {messageDetail && (<>
      <MessageHeader message={messageDetail}/>
      <MessageBody message={messageDetail}/></>)
    }
  </ MessageDetailContainer>
}
