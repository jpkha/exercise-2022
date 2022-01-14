import {Message} from '../../model/api/message';
import moment from 'moment';
import styled from 'styled-components';
import {greyMessageColor, greySelectedMessageBackgroundColor} from '../../styles/variables';

const MessageBodyContainer = styled.article`
  background-color: white;
  flex: 1 1 auto;
  padding: 28px;
  font-size: 1.1875rem;
`

const MessageBodyTitle = styled.h3`
  padding: 0 0 6px;
  margin: 0;
`

const MessageDateTime = styled.time`
  color: ${greyMessageColor};
  padding-top: 40px;
`
export const MessageBody = ({message} : {message: Message}) => {
  return (
    <MessageBodyContainer>
      <MessageBodyTitle>{message.contact.firstname} {message.contact.lastname}</MessageBodyTitle>
      <MessageDateTime>{moment(message.date).format('Do MMMM YYYY à hh:mm')}</MessageDateTime>
      <p>{message.body}</p>
    </MessageBodyContainer>
  )
}
