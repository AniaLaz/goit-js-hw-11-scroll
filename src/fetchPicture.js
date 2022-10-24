const BASEURL = 'https://pixabay.com/api/';
const KEY = "23818596-d5461ac6688865132aed17576";

export async function fetchPicture(name,page) {
    const arrPicture = await fetch(`${BASEURL}?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch =true&page=${page}&per_page=40`)
    const response = await arrPicture.json()
    return response

}


// export function fetchPicture(name,page) {
//     const arrPicture = fetch(`https://pixabay.com/api/?key=23818596-d5461ac6688865132aed17576&q=${name}&image_type=photo&orientation=horizontal&safesearch =true&page=${page}&per_page=40`)
// return arrPicture.then( response=> {
// if(!response.ok){
//     throw new Error(response.status)
// }
// console.log(response);
// return response.json();
// })
// }

