const quoteBody = document.getElementById("quoteBody");
const quote = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quoteAuthor');
const generateBtn = document.getElementById('generateBtn');
const saveBtn = document.getElementById('saveBtn');

const quoteList = document.getElementById('quoteList');



let savedQuotes = []



/**
 * This function pulls the api data
 * 
 * @returns {promise<object>}
 */
async function fetchJson(api) {
    try {
        const response = await fetch(api);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        return data[0];
    } catch (error) { 
        console.error("Error: ", error);
        
    }
}

/**
 * This function simply set the Ui to the quote
 * 
 * @returns {void}
 */
async function getQuote() {
    const quoteApi = "https://api.quotable.io/quotes/random"
    const quoteStuff = await fetchJson(quoteApi);
    console.log(quoteStuff);
    const { content, author, id } = quoteStuff;

    quote.innerText = content;
    quoteAuthor.innerText = author;
    
}

async function saveQuote() {

}




generateBtn.addEventListener('click', () => {
    getQuote()
})
