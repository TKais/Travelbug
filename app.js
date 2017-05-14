var request = require('request');

const Travelbug = ( () => {

	const _buildRequestUrl = (place) => {
	    const spotifyQuery = 'https://api.spotify.com/v1/search?q=';
	    const spotifyType  = '&type=playlist';
	    const requestUrl   = spotifyQuery + place + spotifyType;
	    return requestUrl;
	}

	const getPlaylists = (place) => {
		const requestUrl = _buildRequestUrl(place);
		return new Promise( (resolve, reject) => {
			request(requestUrl, (error, response, body) => {
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