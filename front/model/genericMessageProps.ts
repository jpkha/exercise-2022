export interface GenericMessageProps {
  genericMessage: {
    type: string,
    title: string,
    date: Date,
    messageContentTitle: string,
    messageContentBody: string,
    phone: string,
    read: boolean
  }
}
