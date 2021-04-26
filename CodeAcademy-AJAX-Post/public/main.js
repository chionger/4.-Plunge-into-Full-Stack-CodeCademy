// Information to reach API
const apiKey = 'ab94784b594d4d9f996468f9d2b39767';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = ()=>{
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response);
  }
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('apikey', apiKey);
xhr.send(data);
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
