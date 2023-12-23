import React from "react";
import { useGlobalContext } from "../context/context";

const SearchBar = () => {
	const { query, setQuery, isError } = useGlobalContext();
	return (
		<section className="search-section">
			<h2>Search for your favourite movie--Main</h2>
			<div>
				<form action="#" onSubmit={(e) => e.preventDefault()}>
					<input
						type="text"
						placeholder="Search here"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</form>
				<div className="card-error">
					<p>{isError.show && isError.msg}</p>
				</div>
			</div>
		</section>
	);
};

export default SearchBar;
