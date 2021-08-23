# Intro

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

An Apollo client v3 is intantieted in the index.js along with a cache which configuration and initial values are provided from cache.js. 

App.js query the cache and maps an array to render a list of items. Each item has two iconButtons that add another item or deletes. 

Reactive var "Var1" is declared also in cache.js and used by the handlers to update the array.  

Handlers addItem, deleteItem, onChange and the query declarations reside in src/operations

Some styling done with @emotion/styled library

A few componentes provided from fluent UI library

## Instructions
1. cd "my-app" 
2. npm install
3. npm start
4. Open localhost: 3000 

