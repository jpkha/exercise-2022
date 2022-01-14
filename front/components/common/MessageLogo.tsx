export const MessageLogo = ({type, read}: {type:string, read: boolean}) => {
  switch (type) {
    case 'email':
      return (read  ? <i className="mypro-icon mypro-icon-mail"></i> :
        <i className="mypro-icon mypro-icon-inbox"></i>)
    case 'sms':
      return <i className="mypro-icon mypro-icon-sms"></i>
    case 'phone':
      return <i className="mypro-icon mypro-icon-phone"></i>
    default:
      return <div>Error, need to be checked</div>
  }
}
