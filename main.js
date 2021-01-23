console.log('hello world');

const apiKey = 'b2f9b657d8fd4c34a28beba13cab25c2​';

fetch('https://api.bizzabo.com/api', {
    method: 'GET',
    headers: {
        'Accept': 'application/vnd.bizzabo.v2.0+json',
        'Authorization': 'bearer' + apiKey,
    },
    mode: 'cors',
    cache: 'default',
})
    .then(respone => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
