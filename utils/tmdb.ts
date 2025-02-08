const TMDB_API_KEY = 'API_KEY'; // You'll need to get this from TMDB
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const fetchTrending = async () => {
	const response = await fetch(
		`${BASE_URL}/trending/all/week?api_key=${TMDB_API_KEY}`
	);
	return response.json();
};

export const fetchNetflixOriginals = async () => {
	const response = await fetch(
		`${BASE_URL}/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`
	);
	return response.json();
};

export const getImageUrl = (path, size = 'original') => {
	return `${IMAGE_BASE_URL}/${size}${path}`;
};