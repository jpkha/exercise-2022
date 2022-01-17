import {Message} from '../../model/api/message';
import moment from 'moment';
import styled from 'styled-components';
import {devicesMaxWidth, greyMessageColor, greySelectedMessageBackgroundColor} from '../../styles/variables';
import {MessageDetailsBorder} from '../../styles/utils';

const MessageBodyContainer = styled.article`
  ${MessageDetailsBorder};
  background-color: white;
  flex: 1 1 auto;
  font-size: 1.1875rem;
  @media ${devicesMaxWidth.tablet} {
    font-size: 1rem;
  }
`

const MessageBodyTitle = styled.h3`
  padding: 0 0 6px;
  margin: 0;
  font-size: 1.1875rem;
  @media ${devicesMaxWidth.tablet} {
    font-size: 1.125rem;
  }
  
`

const MessageDateTime = styled.time`
  color: ${greyMessageColor};
  font-size: 1.1875rem;
  @media ${devicesMaxWidth.tablet} {
    font-size: 0.875rem;
    
  }
`

const MessageContent = styled.p `
  padding-top: 40px;
  font-size: 1.25rem;
  @media ${devicesMaxWidth.tablet} {
    padding-top: 20px;
    font-size: 1rem;
  }
`
export const MessageBody = ({message} : {message: Message}) => {
  return (
    <MessageBodyContainer  data-cy="message-detail-body">
      <MessageBodyTitle>{message.contact.firstname} {message.contact.lastname}</MessageBodyTitle>
      <MessageDateTime>{moment(message.date).format('Do MMMM YYYY à hh:mm')}</MessageDateTime>
      <MessageContent>{message.body}</MessageContent>
    </MessageBodyContainer>
  )
}
