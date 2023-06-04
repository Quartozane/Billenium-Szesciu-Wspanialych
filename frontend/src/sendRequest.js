import api from './api/axiosConfig';
export { sendRequest };

async function  sendRequest(method, url, params=null) {
    try {
        const response = await api({
            method: method,
            url: url,
            params: params,
        });

        if (response.status === 200) {
            return response;

        } else {
            console.log('Błąd żądania, response status: ', response.status);
        }
    } catch(e) {
        console.log('Żądanie nie powiodło się!');
    }
}