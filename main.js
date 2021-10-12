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
var maxHits;
var button;

form.onsubmit = async event => {
    event.preventDefault();

    page = 1;

    query = form.elements.query.value;
    color = form.elements.color.value;

    response = await fetch('https://pixabay.com/api/?' + getQuery());
    searchResult = await response.json();

    maxHits = searchResult.totalHits;

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

    for (let i = 0; i < 10; i++) {
        imageUrl = searchResult.hits[i].webformatURL;
        tagsResult = searchResult.hits[i].tags;
        user = searchResult.hits[i].user;

        node = picture[i];
        
        node.innerHTML = '';
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
    };
}

function updateButtons(){

    if (page > 1){
        document.querySelector('#next-button').style.backgroundColor = 'rgb(239, 239, 239)';
        document.querySelector('#prev-button').style.backgroundColor = 'rgb(239, 239, 239)';
    }
    else if (page == 1) {
        document.querySelector('#next-button').style.backgroundColor = 'rgb(239, 239, 239)';
        document.querySelector('#prev-button').style.backgroundColor = 'rgb(51, 51, 51)';
    }
    else if (page == (maxHits/10)) {
        document.querySelector('#next-button').style.backgroundColor = 'rgb(51, 51, 51)';
    }

    

}