# Travelbug
A JavaScript module for retrieving music playlists and/or TV shows associated with a particular city, state or country

## Basic Usage

```javascript
var Travelbug = require('travelbug');

/**
* Travelbug accepts two parameters:
* @place (string) REQUIRED => A city, state or country
* @key (string) OPTIONAL => If requesting a TV show, you must provide a Guidebox API key
**/

/**
* Travelbug returns a Promise
**/

Travelbug.getPlaylists('Paris').then( (data) => { console.log(data) });
Travelbug.getShows('Paris', 'API_KEY').then( (data) => { console.log(data) });

```