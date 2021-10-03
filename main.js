const apiKey = '23614147-4222d5c3181786bafd0e600b2';

//#region nodes
const node = document.querySelector('#picture0')
const node1 = document.querySelector('#picture1')
const node2 = document.querySelector('#picture2')
const node3 = document.querySelector('#picture3')
const node4 = document.querySelector('#picture4')
const node5 = document.querySelector('#picture5')
const node6 = document.querySelector('#picture6')
const node7 = document.querySelector('#picture7')
const node8 = document.querySelector('#picture8')
const node9 = document.querySelector('#picture9')
//#endregion

//#region template
const template = document.querySelector('#picture-template');
node.appendChild(template.cloneNode(true).content);
node1.appendChild(template.cloneNode(true).content);
node2.appendChild(template.cloneNode(true).content);
node3.appendChild(template.cloneNode(true).content);
node4.appendChild(template.cloneNode(true).content);
node5.appendChild(template.cloneNode(true).content);
node6.appendChild(template.cloneNode(true).content);
node7.appendChild(template.cloneNode(true).content);
node8.appendChild(template.cloneNode(true).content);
node9.appendChild(template.cloneNode(true).content);
//#endregion

//#region form, images, tags, photographer
const form = document.querySelector('.search-form');

const image = node.querySelector('img');
const tags = node.querySelector('#tags');
const photographer = node.querySelector('#photographer');
const image1 = node1.querySelector('img');
const tags1 = node1.querySelector('#tags');
const photographer1 = node1.querySelector('#photographer');
const image2 = node2.querySelector('img');
const tags2 = node2.querySelector('#tags');
const photographer2 = node2.querySelector('#photographer');
const image3 = node3.querySelector('img');
const tags3 = node3.querySelector('#tags');
const photographer3 = node3.querySelector('#photographer');
const image4 = node4.querySelector('img');
const tags4 = node4.querySelector('#tags');
const photographer4 = node4.querySelector('#photographer');
const image5 = node5.querySelector('img');
const tags5 = node5.querySelector('#tags');
const photographer5 = node5.querySelector('#photographer');
const image6 = node6.querySelector('img');
const tags6 = node6.querySelector('#tags');
const photographer6 = node6.querySelector('#photographer');
const image7 = node7.querySelector('img');
const tags7 = node7.querySelector('#tags');
const photographer7 = node7.querySelector('#photographer');
const image8 = node8.querySelector('img');
const tags8 = node8.querySelector('#tags');
const photographer8 = node8.querySelector('#photographer');
const image9 = node9.querySelector('img');
const tags9 = node9.querySelector('#tags');
const photographer9 = node9.querySelector('#photographer');
//#endregion

form.onsubmit = async event => {
    event.preventDefault();

    var query = null;
    if (form.elements.color.value == 'any-color') {
        query = form.elements.query.value;
    }
    else {
        query = form.elements.query.value + '+' + form.elements.color.value;
    }

    const queryString = new URLSearchParams({
        key: apiKey,
        q: query
    });
    const response = await fetch('https://pixabay.com/api/?' + queryString);
    const searchResult = await response.json();

    //#region pic 1 set
    const imageUrl = searchResult.hits[0].webformatURL;
    const tagsResult = searchResult.hits[0].tags;
    const user = searchResult.hits[0].user;
    //#endregion

    //#region pic 2 set
    const imageUrl1 = searchResult.hits[1].webformatURL;
    const tagsResult1 = searchResult.hits[1].tags;
    const user1 = searchResult.hits[1].user;
    //#endregion
    
    //#region pic 3 set
    const imageUrl2 = searchResult.hits[2].webformatURL;
    const tagsResult2 = searchResult.hits[2].tags;
    const user2 = searchResult.hits[2].user;
    //#endregion
    
    //#region pic 4 set
    const imageUrl3 = searchResult.hits[3].webformatURL;
    const tagsResult3 = searchResult.hits[3].tags;
    const user3 = searchResult.hits[3].user;
    //#endregion
    
    //#region pic 5 set
    const imageUrl4 = searchResult.hits[4].webformatURL;
    const tagsResult4 = searchResult.hits[4].tags;
    const user4 = searchResult.hits[4].user;
    //#endregion
    
    //#region pic 6 set
    const imageUrl5 = searchResult.hits[5].webformatURL;
    const tagsResult5 = searchResult.hits[5].tags;
    const user5 = searchResult.hits[5].user;
    //#endregion
    
    //#region pic 7 set
    const imageUrl6 = searchResult.hits[6].webformatURL;
    const tagsResult6 = searchResult.hits[6].tags;
    const user6 = searchResult.hits[6].user;
    //#endregion
    
    //#region pic 8 set
    const imageUrl7 = searchResult.hits[7].webformatURL;
    const tagsResult7 = searchResult.hits[7].tags;
    const user7 = searchResult.hits[7].user;
    //#endregion
    
    //#region pic 9 set
    const imageUrl8 = searchResult.hits[8].webformatURL;
    const tagsResult8 = searchResult.hits[8].tags;
    const user8 = searchResult.hits[8].user;
    //#endregion
    
    //#region pic 10 set
    const imageUrl9 = searchResult.hits[9].webformatURL;
    const tagsResult9 = searchResult.hits[9].tags;
    const user9 = searchResult.hits[9].user;
    //#endregion
    
    //#region pic 1
    image.hidden = false;
    image.src = imageUrl;
    tags.hidden = false;
    tags.textContent = tagsResult;
    photographer.hidden = false;
    photographer.textContent = user;
    //#endregion

    //#region pic 2
    image1.hidden = false;
    image1.src = imageUrl1;
    tags1.hidden = false;
    tags1.textContent = tagsResult1;
    photographer1.hidden = false;
    photographer1.textContent = user1;
    //#endregion

    //#region pic 3
    image2.hidden = false;
    image2.src = imageUrl2;
    tags2.hidden = false;
    tags2.textContent = tagsResult2;
    photographer2.hidden = false;
    photographer2.textContent = user2;
    //#endregion

    //#region pic 4
    image3.hidden = false;
    image3.src = imageUrl3;
    tags3.hidden = false;
    tags3.textContent = tagsResult3;
    photographer3.hidden = false;
    photographer3.textContent = user3;
    //#endregion

    //#region pic 5
    image4.hidden = false;
    image4.src = imageUrl4;
    tags4.hidden = false;
    tags4.textContent = tagsResult4;
    photographer4.hidden = false;
    photographer4.textContent = user4;
    //#endregion

    //#region pic 6
    image5.hidden = false;
    image5.src = imageUrl5;
    tags5.hidden = false;
    tags5.textContent = tagsResult5;
    photographer5.hidden = false;
    photographer5.textContent = user5;
    //#endregion

    //#region pic 7
    image6.hidden = false;
    image6.src = imageUrl6;
    tags6.hidden = false;
    tags6.textContent = tagsResult6;
    photographer6.hidden = false;
    photographer6.textContent = user6;
    //#endregion

    //#region pic 8
    image7.hidden = false;
    image7.src = imageUrl7;
    tags7.hidden = false;
    tags7.textContent = tagsResult7;
    photographer7.hidden = false;
    photographer7.textContent = user7;
    //#endregion

    //#region pic 9
    image8.hidden = false;
    image8.src = imageUrl8;
    tags8.hidden = false;
    tags8.textContent = tagsResult8;
    photographer8.hidden = false;
    photographer8.textContent = user8;
    //#endregion

    //#region pic 10
    image9.hidden = false;
    image9.src = imageUrl9;
    tags9.hidden = false;
    tags9.textContent = tagsResult9;
    photographer9.hidden = false;
    photographer9.textContent = user9;
    //#endregion

    document.querySelector('#prev-button').hidden = false;
    document.querySelector('#next-button').hidden = false;
}
