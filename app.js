var request = require('request');
var async = require('async');

var Travelbug = (function() {

	const _buildRequestUrl = (place) => {
	    const spotifyQuery = 'https://api.spotify.com/v1/search?q=';
	    const spotifyType  = '&type=playlist';
	    const requestUrl   = spotifyQuery + place + spotifyType;
	    return requestUrl;
	}

	var getPlaylists = function(place) {
		var requestUrl = _buildRequestUrl(place);
		return new Promise( function(resolve, reject) {
			request(requestUrl, function(error, response, body) {
				if(!error && response.statusCode === 200) {
					resolve(JSON.parse(body));
				} else {
					reject('Could not find any results for ' + place);
				}
			});
		});
	};


	var getShows = function(place, key) {
		// console.log(key);
	};


	return {
		getPlaylists : getPlaylists,
		getShows : getShows
	}

})();

module.exports = Travelbug;