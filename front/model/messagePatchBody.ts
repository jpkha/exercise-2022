import {Message} from './api/message';

export interface MessagePatchBody extends Omit<Message, 'id'>{}
