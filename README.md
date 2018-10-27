# MyReads Project

Based on the starter git repo.

## TL;DR

To that the application:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the application.
    ├── App.js # BooksApp
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── Book.js # 
    ├── SearchBook.js # 
    ├── Shelf.js # 
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Usage

Each book has a control that lets you select the shelf for that book (green
circle at the bottom right of the cover image.). When you select a different
shelf, the book moves there. The default value for the control is the current
shelf the book is in.

The main page also has a link to /search (green plus button at the bottom right
of the main screen), a search page that allows you to find books to add to your
library.

The search page has a text input that may be used to find books. As the value of
the text input changes, the books that match that query are displayed on the
page, along with a control that lets you add the book to your library. 

## Implementaton

Components:

* BooksApp
  * Shelf
  * Book
    * Book Image
    * Book Title
  * Search

Could have broken it down further (e.g. Book Control Menu), but that seemed 
excessive.



