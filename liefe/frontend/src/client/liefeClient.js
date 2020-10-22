const ENDPOINT = "http://localhost:5001"

const request = async (url, params) => {
    const response = await fetch(url, params);
    const body = await response.json();

    if (response.status >= 400) {
        throw new Error(body.message);
    }

    return body;
}

const getUserByEmail = async (email) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url = `${ENDPOINT}/users/${email}`;

    const body = await request(url, {
      method: 'GET',
      headers: headers
    });

    return body;
}

const saveUser = async (userData) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${ENDPOINT}/users`

    const body = await request(url, {
        method: 'POST',
        headers: headers,
        mode: 'cors',
        body: JSON.stringify(userData)
    })

    return body;
}

export {
    getUserByEmail,
    saveUser
}