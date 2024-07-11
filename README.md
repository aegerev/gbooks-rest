# Google Search Books - REST Edition

![image](https://github.com/upennbootcamp23/project21/assets/143010411/2d918085-ce65-45ee-9794-b8d9e3c6bfc9)


## Description

This project was created to search for books using the REST API.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Website](#website)

## Installation

The following packages have to be installed:
1. Node.js
2. Express

## Usage
As a bookworm
I want to search for books by title and author using a Google Book Search REST API
So that I can easily find the books I'm interested in and explore their details.

Acceptance Criteria:
 The API should accept a GET request with query parameters for title and/or author.
 The title and author parameters should be optional, allowing searches for all books if omitted.
 The API response should return a list of books in JSON format, including:
    Title
    Authors (array of author names)
    Publisher (if available)
    ISBN (if available)
    Description (a short summary of the book)
    A link to the book's detail page on Google Books (if available)
 The API should handle cases where no books are found for the provided search criteria and return an appropriate message.
 The API should implement pagination to handle large result sets. The response should include information on the total number of results and options to navigate through pages.

## Credits
1. The project is a modified version of the starter code presented by UPenn Bootcamp. The link to its repository is [https://github.com/coding-boot-camp/cautious-meme](https://github.com/coding-boot-camp/solid-broccoli).

## Website
