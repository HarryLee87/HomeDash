const QUOTES_URL = 'https://dummyjson.com/quotes/random';

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

async function getTodayQuote() {
  try {
    const response = await fetch(QUOTES_URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    quote.innerText = json.quote;
    author.innerText = json.author;
  } catch (error) {
    console.error(error.message);
  }
}

getTodayQuote();
