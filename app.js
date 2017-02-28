var request = require('request');

var Travelbug = (function() {

	var getPlaylists = function(place) {
		_makeRequest(place);
		// 'https://api.spotify.com/v1/search?q=' + place + '&type=playlist" -H "Accept: application/json'
	};

	var getShows = function(place, key) {
		// console.log(key);
	};

	var _makeRequest = function(place) {
		var responseBody;
		request('https://api.spotify.com/v1/search?q=' + place + '&type=playlist', function(error, response, body) {
			if(!error && response.statusCode === 200) {
				responseBody = JSON.parse(body);
				console.log(responseBody);
			}
		});
		return new Promise( function(resolve, reject) {
			if(responseBody.playlists.items.length > 0) {
				resolve(responseBody.playlists.items);
			} else {
				reject(Error('Cannot find playlists for ' + place));
			}
		});
	};

	// var showAll = function(items) {
	// 	items.forEach(function(item) {
	// 		console.log(item);
	// 	});
	// };

	return {
		getPlaylists : getPlaylists,
		getShows : getShows
	}

})();

module.exports = Travelbug;