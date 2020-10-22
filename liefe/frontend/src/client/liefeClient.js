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

    const response = await fetch(`${ENDPOINT}/users/${email}`, {
      method: 'GET',
      headers: headers
    });

    return response.json();
}

const saveUser = async (userData) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
        
    const body = await request('http://localhost:5001/users', {
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