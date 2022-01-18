import {Message} from '../model/api/message';

export const mockMessageEmail: Message = {
  'body': 'Lorem Ipsum #10100 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  'contact': {
    'email': 'cdavis@gmail.com',
    'firstname': 'Charles',
    'lastname': 'Davis',
    'phone': '0669581508'
  },
  'date': '2021-12-30T11:57:24.496370',
  'id': 10100,
  'read': true,
  'subject': 'Email #10100',
  'type': 'email'
}

export const mockMessagePhone: Message = {
  'body': 'Lorem Ipsum #10100 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  'contact': {
    'email': 'cdavis@gmail.com',
    'firstname': '',
    'lastname': '',
    'phone': '0669581508'
  },
  'date': '2021-12-30T11:57:24.496370',
  'id': 10100,
  'read': true,
  'subject': 'Phone #10100',
  'type': 'phone'
}

export const mockMessageSms: Message = {
  'body': 'Lorem Ipsum #10100 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  'contact': {
    'email': 'cdavis@gmail.com',
    'firstname': 'Charles',
    'lastname': 'Davis',
    'phone': '0669581508'
  },
  'date': '2021-12-30T11:57:24.496370',
  'id': 10100,
  'read': false,
  'subject': 'Sms #10100',
  'type': 'sms'
}
