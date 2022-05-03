// document.querySelector('button');
// document.querySelector('.new-quote button');
const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

async function getQuote(){
  console.log('quote button click');
  try{
    const response = await fetch(endpoint);
    if(!response.ok){
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.ip);
}    catch(err) {
      console.log(err)
      alert('failed');
    }
}

function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

const endpoint = 'https://ip-fast.com/api/ip/?format=json'
