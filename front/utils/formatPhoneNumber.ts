export const formatPhoneNumber= (phoneNumber: string): string | undefined => {
  return phoneNumber?.replace(/^\s*([0-9]{2})\s*\-?([0-9]{2})\s*\-?([0-9]{2})\s*\-?([0-9]{2})\s*\-?([0-9]{2})$/, '$1 $2 $3 $4 $5')
}
