import {Message} from '../../model/api/message';
import styled from 'styled-components';
import {greyIconColor, primaryColor} from '../../styles/variables';
import {MessageLogo} from '../common/MessageLogo';


const MessageHeaderContainer = styled.header`
  background-color: white;
  flex: 0 0 auto;
  margin-bottom: 28px;
  padding: 28px;
  display: flex;
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
    width: 200px;
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
  return <MessageHeaderContainer>
    <MessageHeaderLogo>
      <MessageLogo type={type} read={true}/>
    </MessageHeaderLogo>
    <MessageHeaderContent>
      <MessageHeaderTitle> {contact.firstname} {contact.lastname}</MessageHeaderTitle>
      <MessageHeaderDescription><span>Email</span> <a href={`mailto:${contact.email}`}
                                                      target="_blank">{contact.email}</a> </MessageHeaderDescription>
      <MessageHeaderDescription> <span>Téléphone</span> <a href={`tel:${contact.phone}`}
                                                           target="_blank">{contact.phone}</a>
      </MessageHeaderDescription>
    </MessageHeaderContent>
  </MessageHeaderContainer>
}
