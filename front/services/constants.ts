export const BASE_URL_API = 'http://localhost:8080';
export const REALTORS_API = `${BASE_URL_API}/realtors`

export const REALTORS_MESSAGES_API = (realtorsId: string) => `${BASE_URL_API}/realtors/${realtorsId}/messages`;
export const REALTORS_MESSAGES_PAGE_API = (realtorsId: string, page: number) => `${BASE_URL_API}/realtors/${realtorsId}/messages/?page=${page.toString()}`;
export const REALTORS_SPECIFIC_MESSAGES_API = (realtorsId: string, messageId: string) => `${BASE_URL_API}/realtors/${realtorsId}/messages/${messageId}`;
