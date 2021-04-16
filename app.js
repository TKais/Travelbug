var request = require('request');

const Travelbug = ( () => {

	const _buildRequestUrl = (place, apiKey, isSpotify) => {
		const requestUrl = isSpotify ? 'https://api.spotify.com/v1/search?q=' + place + '&type=playlist' : 'http://api-public.guidebox.com/v2/shows\?api_key\=' + apiKey + '\&tags\=' + place;
		return requestUrl;
	}

	const _makeRequest = (requestUrl, isSpotify) => {
		return new Promise( (resolve, reject) => {
			request(requestUrl, (error, response, body) => {
				if(!error && response.statusCode === 200) {
					isSpotify ? resolve(JSON.parse(body).playlists.items) : resolve(JSON.parse(body).results);
				} else {
					reject('Error: Could not find any results for ' + place);
				}
			});
		});
	}

	const getPlaylists = (place) => {
		const requestUrl = _buildRequestUrl(place, null, true);
		const musicData = _makeRequest(requestUrl, true);
		return musicData;
	};


	const getShows = (place, apiKey) => {
		const requestUrl = _buildRequestUrl(place, apiKey, false);
		const showData = _makeRequest(requestUrl, false);
		return showData;
	};


	return {
		getPlaylists : getPlaylists,
		getShows : getShows
	}

})();

module.exports = Travelbug;
