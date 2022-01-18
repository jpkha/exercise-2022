import styled from 'styled-components';
import {
  greyBackgroundColor,
  greyIconColor,
  greyMessageColor,
  greySelectedMessageBackgroundColor,
  primaryColor
} from '../../styles/variables';
import {useRouter} from 'next/router';
import {MessageLogo} from '../common/MessageLogo';
import {GenericMessageProps} from '../../model/genericMessageProps';
import {MessageTitleCard} from './MessageTitleCard';


const MessageCardContainer = styled.li`
  overflow: hidden;
  position: relative;
  z-index: 0;
  border-bottom: 1px solid #BABBBA;
  display: flex;
  flex: 0 0 auto;
  padding: 20px 12px;
  background-color: ${({selectedMessage}) => selectedMessage ? greySelectedMessageBackgroundColor : 'white'};
  ${({selectedMessage}) => !selectedMessage && `
    :hover, :focus {
    cursor: pointer;
    background-color: ${greyBackgroundColor};
  }
  `}
`

const MessageMainBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  overflow: hidden;
  color: ${({read}) => read ? greyMessageColor : 'black'};

  > h3 {
    padding: 0;
    margin: 0;
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
  overflow: hidden;
  flex: 0 0 auto;
  margin-right: 12px;
  color: ${({read}) => read ? greyIconColor : primaryColor};
`


export const MessageGenericCard = ({genericMessage, handleClickMessageCard}: GenericMessageProps) => {
  const {messageContentTitle, body, read, id, type} = genericMessage;
  const router = useRouter();
  const messageId = router.query.messageId?.toString();

  return <MessageCardContainer selectedMessage={messageId === id.toString()} onClick={handleClickMessageCard} data-cy-read={read}>
    <MessageTypeLogo read={read} role="img" aria-label={genericMessage.description}><MessageLogo type={type} read={read}/></MessageTypeLogo>
    <MessageMainBodyContainer read={read}>
      <MessageTitleCard genericMessage={genericMessage}/>
      <MessageContent>
        {messageContentTitle}
        <MessageBody>
          {body}
        </MessageBody>
      </MessageContent>
    </MessageMainBodyContainer>
  </MessageCardContainer>
}
