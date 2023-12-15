const API_URL = "http://www.omdbapi.com/?apikey=2bbb7bbb";
const useFetch = (apiParams) => {
	useEffect(() => {
		getMovies(`${API_URL}`);
	}, [apiParams]);
};
