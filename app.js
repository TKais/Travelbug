var Travelbug = (function() {
	var getPlaylists = function(place) {
		console.log(place);
	};

	var getShows = function(place, key) {
		console.log(key);
	};

	return {
		getPlaylists : getPlaylists,
		getShows : getShows
	}

})();

module.exports = Travelbug;