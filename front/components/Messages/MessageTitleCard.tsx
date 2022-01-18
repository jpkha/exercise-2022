import Link from 'next/link';
import {relativeDateTime} from '../../utils/relativeDateTime';
import {GenericMessageProps} from '../../model/genericMessageProps';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import {primaryColor} from '../../styles/variables';
import {formatPhoneNumber} from '../../utils/formatPhoneNumber';

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

const MessageLink = styled.a`
  ::after {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`

export const MessageTitleCard = ({genericMessage}: GenericMessageProps) => {
  const {title, date, phone, read, id} = genericMessage;
  const router = useRouter();
  const realtorsId = router.query.realtorsId?.toString();
  const link = `/realtors/${realtorsId}/messages/${id}`;
  const parsedPhone = formatPhoneNumber(phone);
  return <MessageTitleContainer read={read}>
    <h2>
      {title ?
        <>
          <Link href={link} passHref>
            <MessageLink >{title}</MessageLink>
          </Link>
          {parsedPhone && (
            <span>({parsedPhone})
              </span>)
          }
        </>
        :
        <Link href={link} passHref>
          <MessageLink>{parsedPhone && <>{parsedPhone}</>}</MessageLink>
        </Link>
      }
    </h2>
    <time>{relativeDateTime(date)}</time>
  </MessageTitleContainer>
}
