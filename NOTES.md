# MyReads Project
# Miles Davis <miles@cs.stanford.edu>

This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## TL;DR

To get started developing right away:

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
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

```bash
├── NOTES.md - This file.
└── src
    ├── Books.js #
    └── Shelf.js #
```


slimy-bury-prepuce

outline the steps needed to build the project
draw the application
what individual screens would look like
how the Components are connected to each other
write down the architecture
develop the app piece by piece
And just before submitting:

squash all bugs
check the rubric and make sure that your project meets all requirements





The three shelves (categories) are:

  Currently Reading
  
  Want to Read
  
  Read
    Book


Each book has a control that lets you select the shelf for that book. When you
select a different shelf, the book moves there. Note that the default value for
the control should always be the current shelf the book is in.


The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of
the text input changes, the books that match that query are displayed on the
page, along with a control that lets you add the book to your library. To keep
the interface consistent, you may consider re-using some of the code you used to
display the books on the main page.


Components:

* Library
  * Shelf
  * Book
    * Book Control Menu
    * Book Image
    * Book Title
* Search
