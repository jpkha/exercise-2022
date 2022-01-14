import styled from 'styled-components';
import {greyBackgroundColor} from '../../styles/variables';
import {Message} from '../../model/api/message';
import {MessageHeader} from './MessageHeader';
import {MessageBody} from './MessageBody';

const MessageDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  background-color: ${greyBackgroundColor};
  padding: 28px;
  overflow: auto;
`
export const MessageDetail = ({messageDetail}: { messageDetail: Message }) => {
  return <MessageDetailContainer>
    {messageDetail && (<>
      <MessageHeader message={messageDetail}/>
      <MessageBody message={messageDetail}/></>)
    }
  </ MessageDetailContainer>
}
