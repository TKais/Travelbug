# Travelbug
A JavaScript module for retrieving music playlists and/or TV shows associated with a particular city, state or country.

## Technical Details

A JavaScript module written in ES6 that exposes two public methods: getPlaylists and getShows. Each method returns a Promise, and if they resolve with a 200 status from the server, an array of objects containing the playlists and/or TV shows is returned. 

## Basic Usage

```javascript
var Travelbug = require('travelbug');

/**
* Travelbug accepts two parameters:
* @place (string) REQUIRED => A city, state or country
* @key (string) OPTIONAL => If requesting a TV show, you must provide a Guidebox API key
**/

Travelbug.getPlaylists('Paris').then( (data) => { console.log(data) });
Travelbug.getShows('Paris', 'API_KEY').then( (data) => { console.log(data) });

```