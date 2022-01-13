import {Message} from '../model/api/message';
import moment from 'moment';

export const orderByDate = (messages: Message[]): Message[] => {
  return messages.sort((a, b) =>
    moment(a.date) < moment(b.date)
      ? 1
      : moment(a.date) > moment(b.date)
        ? -1
        : 0
  )
}
