const ENDPOINT = "http://localhost:5001"

const request = async (url, params) => {
    try{
        const response = await fetch(url, params);
        const body = await response.json();
    
        if (response.status >= 400) {
            throw new Error(body.message);
        }
    
        return body;
    }catch(e){
        console.error(e)
    }

}

const getUserByEmail = async (email) => {
    const body = await getCollectionByEmail('users', email)
    return body && body[0]
}

const getDeliveryByEmail = async (email) => {
    const body = await getCollectionByEmail('deliveries', email)
    return body
}

const getCollectionByEmail = async (collectionName, email) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url = `${ENDPOINT}/${collectionName}/${email}`;

    const body = await request(url, {
      method: 'GET',
      headers: headers
    });
    return body;
}

const deleteDeliveryById = async (id) => {
    const url = `${ENDPOINT}/deliveries/${id}`;

    const body = await request(url, {method: 'DELETE'});
    return body;
}

const saveUser = async (userData) => {
    const body = await saveCollection('users', userData, 'POST')
    return body;
}

const saveDelivery = async (deliveryData) => {
    const body = await saveCollection('deliveries', deliveryData, 'POST')
    return body;
}

const saveCollection = async (collectionName, data, type) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${ENDPOINT}/${collectionName}`

    const body = await request(url, {
        method: type,
        headers: headers,
        mode: 'cors',
        body: JSON.stringify(data)
    })

    return body;
}

export {
    getUserByEmail,
    getDeliveryByEmail,
    saveUser,
    saveDelivery,
    deleteDeliveryById
}