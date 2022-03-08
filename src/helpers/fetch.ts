// const baseUrl = process.env.REACT_APP_API_URL;
// const baseUrl: string = import.meta.env.REACT_APP_API_URL as string ;
const baseUrl: string = "http://localhost:8080/api";


export const fetchWithOutToken = (endpoint: string, data: any, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {

        return fetch(url);
    } else {
        console.log(data)
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}

export const fetchWithToken = (endpoint: string, data: any, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';


    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'x-token': `${token}`
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': `${token}`
            },
            body: JSON.stringify(data)
        });
    }
}