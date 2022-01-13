import moment from 'moment';

export const relativeDateTime = (date: Date) => {
  if (moment().diff(date, `minutes`) <= 59 || moment().diff(date, `hours`) <= 6) {
    return moment(date).fromNow();
  }
  return moment(date).calendar( {
    sameDay: 'hh:mm',
    nextDay: '[Demain]',
    nextWeek: 'dddd',
    lastDay: '[Hier]',
    lastWeek: 'DD/MM/YYYY',
    sameElse: 'DD/MM/YYYY',
  })
}

