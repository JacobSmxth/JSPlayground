const quoteBody = document.getElementById("quoteBody");
const quote = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quoteAuthor');
const generateBtn = document.getElementById('generateBtn');
const saveBtn = document.getElementById('saveBtn');

const quoteList = document.getElementById('quoteList');



let savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

let currentQuoteId



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
 * @returns {} 
 */
async function getQuote() {
    const quoteApi = "https://api.quotable.io/quotes/random"
    const quoteStuff = await fetchJson(quoteApi);
    
    currentQuoteId = quoteStuff._id

    return quoteStuff
}

function loadSavedQuotes(savedArr) {
    quoteList.innerHTML = ''
    savedArr.forEach(thing => {
        const item = document.createElement('li');
        item.innerHTML = `
        "<span class="savedQuote">${thing.content}</span>" - <span class="savedAuthor">${thing.author}</span>
        `
        quoteList.append(item)
    })
}

async function setRandomQuote() {
    const stuff = await getQuote()
    const {content, author} = stuff

    quote.innerText = content;
    quoteAuthor.innerText = author;
}

function isDuplicate(arr, quote) {
    if(arr.find(item => item.content === quote)) {
        return true
    }
    return false
}

function saveQuote(arr, quote) {
    if(!isDuplicate(arr, quote.content)) {
        arr.push(quote);
        localStorage.setItem("quotes", JSON.stringify(savedQuotes));
    } 
}


function setUI() {
    setRandomQuote()
    loadSavedQuotes(savedQuotes)
}

generateBtn.addEventListener('click', () => {
    setRandomQuote()
})

saveBtn.addEventListener('click', () => {
    const content = quote.innerText;
    const author = quoteAuthor.innerText;
    const fullQuote = {
        content: content,
        author: author,
    }
    
    saveQuote(savedQuotes, fullQuote);
    loadSavedQuotes(savedQuotes)
})

// Start with random quote and load saved list
setUI()
