const apiKey = '23614147-4222d5c3181786bafd0e600b2';

const form = document.querySelector('.search-form');
const pageForm = document.querySelector('.page-button-container');

var picture = [
    document.querySelector('#picture0'),
    document.querySelector('#picture1'),
    document.querySelector('#picture2'),
    document.querySelector('#picture3'),
    document.querySelector('#picture4'),
    document.querySelector('#picture5'),
    document.querySelector('#picture6'),
    document.querySelector('#picture7'),
    document.querySelector('#picture8'),
    document.querySelector('#picture9')
];

var template = document.querySelector('#picture-template');

var node;
var image;
var tags;
var photographer;
var imageUrl;
var tagsResult;
var user;
var query;
var color;
var response;
var searchResult;
var page = 1;
var lastPage;
var maxHits;
var perPage = 10;
var button;

form.onsubmit = async event => {
    event.preventDefault();

    page = 1;

    query = form.elements.query.value;
    color = form.elements.color.value;

    response = await fetch('https://pixabay.com/api/?' + getQuery());
    searchResult = await response.json();

    maxHits = searchResult.totalHits;
    counter = maxHits;

    setImages(searchResult);
    
    document.querySelector('#prev-button').hidden = false;
    document.querySelector('#next-button').hidden = false;
    updateButtons();
}

pageForm.onsubmit = async event => {
    event.preventDefault();

    if (button == 'next' && page != (maxHits/10)){
        page += 1;
    }
    else if (button == 'prev' && page != 1){
        page -= 1;
    }
    
    response = await fetch('https://pixabay.com/api/?' + getQuery());
    searchResult = await response.json();
    
    setImages(searchResult);
    updateButtons();
}


function getQuery(){
    
    var queryString = new URLSearchParams({
        key: apiKey,
        q: query,
        colors: color,
        per_page: 10,
        page: page
    });
    
    return queryString;
}

function setImages(searchResult){

    perPage = 10;

    if (maxHits < 10){
        perPage = maxHits;
    }

    for (let i = 0; i < 10; i++){
        node = picture[i];
        node.innerHTML = '';
    }

    for (let i = 0; i < perPage; i++) {

        if (searchResult.hits[i] != null){
        imageUrl = searchResult.hits[i].webformatURL;
        tagsResult = searchResult.hits[i].tags;
        user = searchResult.hits[i].user;

        node = picture[i];

        node.appendChild(template.cloneNode(true).content);
        
        image = node.querySelector('img');
        tags = node.querySelector('#tags');
        photographer = node.querySelector('#photographer');
        
        image.hidden = false;
        image.src = imageUrl;
        tags.hidden = false;
        tags.textContent = tagsResult;
        photographer.hidden = false;
        photographer.textContent = user;

        lastPage = false;
        }
        else {
            lastPage = true;
        }
        
    }
}

function updateButtons(){

    if (page == 1) {
        document.querySelector('#next-button').disabled = false;
        document.querySelector('#prev-button').disabled = true;
    }
    if (page > 1){
        document.querySelector('#next-button').disabled = false;
        document.querySelector('#prev-button').disabled = false;
    }
    if (lastPage == true) {
        document.querySelector('#next-button').disabled = true;
    }
    else if (lastPage == false){
        document.querySelector('#next-button').disabled = false;
    }
    if (maxHits < 10){
        document.querySelector('#next-button').disabled = true;
        document.querySelector('#prev-button').disabled = true;
    }
}