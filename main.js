let data = {}


// const fetchData = () => {
    // data = await (await fetch('./data.json')).json()
    // console.log(data);
    fetch('./data.json')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            for(let i = 0; i < res.content.length; i++) {
                let li = document.createElement('li')
                let a = document.createElement('a')
                a.setAttribute('href', res.content[i].websiteUrl)
                a.setAttribute('target', '_blank')
                a.innerText = res.content[i].name
                console.log('hello!');
                li.appendChild(a)
                document.body.appendChild(li)
            }
        })
    // console.log('hello world');
    
// }

// fetchData();
// console.log(data);






// const apiKey = 'b2f9b657-d8fd-4c34-a28b-eba13cab25c2';

// fetch('https://api.bizzabo.com/api/events', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/vnd.bizzabo.v2.0+json',
//         'Referrer': 'https://api.bizzabo.com/',
//         'Authorization': 'Bearer ' + apiKey,
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//         // 'Origin': 'https://127.0.0.1:8080',
//     },
//     mode: 'cors',
//     // cache: 'default',
// })
//     .then(response => console.log(response))
//     // .then(json => console.log(json))
//     // .catch(error => console.log(error))