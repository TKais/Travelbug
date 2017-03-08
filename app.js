var request = require('request');

var Travelbug = (function() {

	var _makeRequest = function(requestUrl) {
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
	
	var _sendResponse = function(response) {
		console.log('RES--->', response);
		return response;
	}

	var getPlaylists = function(place) {
		_makeRequest('https://api.spotify.com/v1/search?q=' + place + '&type=playlist').then(_sendResponse);
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