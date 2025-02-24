# Random Quote Generator

## Description

This is a simple web application that generates random quotes using the [Quotable API](https://quotable.io/). Users can fetch new quotes with the click of a button and save their favorites, which are stored locally in the browser using local storage.

## Features

- Fetch and display a random quote along with its author.
- Save the currently displayed quote to a list of favorites.
- View the list of saved quotes in a dedicated section.
- Prevent duplicate quotes from being saved.

## Installation

No complex installation is required. To use the application:

1. Download or clone this repository to your local machine.
2. Open the `index.html` file directly in a modern web browser (e.g., Chrome, Firefox, Edge).

### Prerequisites
- A modern web browser.
- An internet connection to fetch quotes from the Quotable API.

## Usage

1. **Generate a Quote**: Click the **"Generate Quote"** button to fetch and display a new random quote.
2. **Save a Quote**: Click the **"Save Quote"** button to add the currently displayed quote to your list of favorites.
3. **View Saved Quotes**: Scroll to the **"Saved Quotes"** section to see all your saved quotes.

Saved quotes are stored in your browser's local storage, meaning they will persist even after you refresh the page or close the browser.

## How It Works

This application is built using the following technologies:

- **HTML**: Provides the structure of the page, including buttons and sections for displaying quotes.
- **CSS**: Styles the application with a clean, centered layout and hover effects on buttons.
- **JavaScript**: Handles the logic, including:
  - Fetching random quotes from the Quotable API.
  - Saving quotes to local storage as a JSON array.
  - Loading and displaying saved quotes.
  - Preventing duplicate quotes from being saved.

The Quotable API (`https://api.quotable.io/quotes/random`) is used to retrieve random quotes, which are then displayed on the page. When a user saves a quote, it is added to an array in local storage and rendered in the "Saved Quotes" list.

## Project Structure
```
Random-Quote-Generator/
├── index.html    # Main HTML file
├── style.css     # Stylesheet for the application
└── main.js       # JavaScript logic for fetching and saving quotes
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
