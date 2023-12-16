import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
export const API_URL = `http://www.omdbapi.com/?apikey=2bbb7bbb`;

const AppProvider = ({ children }) => {
	const [movie, setMovie] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState({ show: false, msg: "" });
	const [query, setQuery] = useState("iron man");
	const [loader, setLoader] = useState();

	const getMovies = async (url) => {
		// setIsLoading(true);
		setLoader(true);
		try {
			const resp = await fetch(url);
			const result = await resp.json();
			console.log(result);
			if (result.Response === "True") {
				// setIsLoading(false);
				setLoader(false);
				setMovie(result.Search || result);

				// setIsError({ ...isError, show: false });
				setIsError({ show: false, msg: "" });
			} else {
				// console.log("Did not fetched the data");
				setIsError({ show: true, msg: result.Error });
				// console.log(isError.msg);
			}
		} catch (error) {
			console.log(error);
		}
	};
	// console.log(movie);

	//Debouncing to restrict the API call on final enter
	useEffect(() => {
		const timer = setTimeout(() => {
			getMovies(`${API_URL}&s=${query}`);
		}, 800);
		// console.log("API Called");
		return () => {
			clearTimeout(timer);
			console.log("clear");
		};
	}, [query]);

	return (
		<AppContext.Provider
			value={{ movie, isError, isLoading, query, setQuery, loader, setLoader }}
		>
			{children}
		</AppContext.Provider>
	);
};

// creating custom hook useGlobalContext
const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
