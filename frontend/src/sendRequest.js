import api from './api/axiosConfig';
import { getUser } from './currentUserStorage';
export { sendRequest };

async function sendRequest(method, url, params=null, data=null) {
    const user = getUser();
    try {
        const response = await api({
            method: method,
            url: url,
            params: {
                mail: user['mail'],
                password: user['password'],
                ...params,
            },
            data: {
                ...data,
            },
        });

        if (response.status === 200) {
            return response;

        } else {
            console.log('Błąd żądania, response status: ', response.status);
        }
    } catch(e) {
        console.log('Żądanie nie powiodło się!', e);
    }
}