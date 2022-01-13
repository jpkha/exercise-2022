import styled from 'styled-components';
import {greyBackgroundColor} from '../styles/variables';
import {Message} from '../model/api/message';

const MessageDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  background-color: ${greyBackgroundColor};
`
export const MessageDetail = ({messageDetail}: {messageDetail : Message}) => {
  return <MessageDetailContainer>
    {messageDetail &&
  <div>{messageDetail.body}
  </div>
    }</MessageDetailContainer>
}
