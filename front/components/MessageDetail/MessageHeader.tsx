import {Message} from '../../model/api/message';
import styled from 'styled-components';
import {devicesMaxWidth, greyIconColor, primaryColor} from '../../styles/variables';
import {MessageLogo} from '../common/MessageLogo';
import {MessageDetailsBorder} from '../../styles/utils';
import {formatPhoneNumber} from '../../utils/formatPhoneNumber';


const MessageHeaderContainer = styled.header`
  ${MessageDetailsBorder};
  background-color: white;
  flex: 0 0 auto;
  display: flex;
  margin-bottom: 28px;
  @media ${devicesMaxWidth.tablet} {
    margin-bottom: 20px;
  }
`

const MessageHeaderTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  margin: 0;
`

const MessageHeaderContent = styled.div`
  padding: 0 12px;
`

const MessageHeaderDescription = styled.div`
  padding-top: 12px;
  font-size: 1rem;

  > span {
    display: inline-block;
    width: 200px; //95px
    @media ${devicesMaxWidth.tablet} {
      width: 95px;
    }
  }

  > a {
    color: ${primaryColor}
  }
`

const MessageHeaderLogo = styled.div`
  color: ${greyIconColor}
`

export const MessageHeader = ({message}: { message: Message }) => {
  const {contact, type} = message
  return <MessageHeaderContainer data-cy="message-detail-header">
    <MessageHeaderLogo>
      <MessageLogo type={type} read={true}/>
    </MessageHeaderLogo>
    <MessageHeaderContent>
      <MessageHeaderTitle> {contact.firstname} {contact.lastname}</MessageHeaderTitle>
      <MessageHeaderDescription><span>Email</span> <a href={`mailto:${contact.email}`}
                                                      rel="noreferrer"
                                                      target="_blank">{contact.email}</a> </MessageHeaderDescription>
      <MessageHeaderDescription> <span>Téléphone</span> <a href={`tel:${contact.phone}`}
                                                           rel="noreferrer"
                                                           target="_blank">{formatPhoneNumber(contact.phone)}</a>
      </MessageHeaderDescription>
    </MessageHeaderContent>
  </MessageHeaderContainer>
}
