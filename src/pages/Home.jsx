import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import MovieTabs from "../components/MovieTabs";

const Home = () => {
	return (
		<div>
			<SearchBar />
			<MovieTabs />
		</div>
	);
};

export default Home;
