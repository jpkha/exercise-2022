import {Message} from '../model/message';

interface MessageProps {
  readonly message: Message,
  readonly handleOnClickMessage: (id: string) => {}
}

export const MessageCard = ({message, handleOnClickMessage}: MessageProps) => {
  return <div onClick={() => handleOnClickMessage(message.id)}>
    <p>
      {message.subject}
    </p>
    <p>
      {message.body}
    </p>
  </div>
}
