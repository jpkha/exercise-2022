import styled from 'styled-components';
import Moment from 'react-moment';
import {
  greyBackgroundColor, greyIconColor,
  greyMessageColor,
  greySelectedMessageBackgroundColor,
  primaryColor
} from '../../styles/variables';
import {useRouter} from 'next/router';


const MessageCardContainer = styled.li`
  overflow: hidden;
  position: relative;
  z-index: 0;
  border-bottom: 1px solid #BABBBA;
  display: flex;
  flex: 0 0 120px;
  padding: 22px 12px;
  background-color: ${({selectedMessage}) => selectedMessage ? greySelectedMessageBackgroundColor : 'white'};
  ${({selectedMessage}) => !selectedMessage && `
    :hover {
    cursor: pointer;
    background-color: ${greyBackgroundColor};
  }
  `}

`

const MessageMainBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  color: ${({read}) => read ? greyMessageColor : 'black'};

  > h3 {
    padding: 0;
    margin: 0;
  }
`

const MessageTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 2px;

  > h2 {
    font-size: 1.1125rem;
    font-weight: ${({read}) => read ? '300' : 'bold'};
    padding: 0;
    margin: 0;
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    > span {
      font-size: 0.875rem;
      font-weight: 300;
      padding: 0 4px;
    }
  }

  > time {
    flex: 0 0 auto;
    padding-left: 2px;
    color: ${({read}) => read ? 'greyMessageColor' : primaryColor};
  }
`

const MessageContent = styled.p`
  margin: 0;
`
const MessageBody = styled.small`
  font-size: 0.875rem;
  padding-top: 4px;
  color: ${greyMessageColor};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`

const MessageTypeLogo = styled.div`
  height: 18px;
  width: 18px;
  overflow: hidden;
  flex: 0 0 auto;
  margin-right: 12px;
  color: ${({read}) => read ? greyIconColor : primaryColor};
`

const MessageLink = styled.a`
  ::after{
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`
interface GenericMessageProps {
  message: {
    type: string,
    title: string,
    date: Date,
    messageContentTitle: string,
    messageContentBody: string,
    phone: string,
    read: boolean
  }
}


export const MessageGenericCard = ({message}: GenericMessageProps) => {
  const {type, title, date, messageContentTitle, body, phone, read, id} = message;
  const router = useRouter();
  const realtorsId = router.query.realtorsId as string;
  const messageId = router.query.messageId as string;
  console.log(messageId);
  console.log(id);
  const link = `/realtors/${realtorsId}/messages/${id}`;

  return <MessageCardContainer selectedMessage={messageId === id.toString()}>
    <MessageTypeLogo read={read}>{type}</MessageTypeLogo>

    <MessageMainBodyContainer read={read}>
      <MessageTitleContainer read={read}>
        <h2>
          <MessageLink href={link}>{title}</MessageLink>
          {phone && (
            <span>({phone.replace(/^\s*([0-9]{2})\s*\-?([0-9]{2})\s*\-?([0-9]{2})\s*\-?([0-9]{2})\s*\-?([0-9]{2})$/, '$1 $2 $3 $4 $5')})</span>)}
        </h2>
        <Moment fromNow ago>{date}</Moment>
      </MessageTitleContainer>
      <MessageContent>
        {messageContentTitle}
        <MessageBody>
          {body}
        </MessageBody>
      </MessageContent>
    </MessageMainBodyContainer>

  </MessageCardContainer>
}
