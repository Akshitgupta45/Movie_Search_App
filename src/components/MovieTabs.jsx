import React from "react";
import { useGlobalContext } from "../context/context";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";

const MovieTabs = () => {
	const { movie, isLoading, loader } = useGlobalContext();

	// if (isLoading) {
	// 	return <h1>Loading....</h1>;
	// }
	if (loader) {
		return <Loader />;
	}
	return (
		<section className="movie-page">
			<div className="grid grid-4-col container">
				{movie.map((currMovie) => {
					const { imdbID, Title, Poster } = currMovie;
					const movieName = Title.substring(0, 15);
					return (
						<NavLink to={`movie/${imdbID}`} key={imdbID}>
							<div className="card">
								<div className="card-info">
									<h2>{Title.length >= 15 ? `${movieName}...` : movieName}</h2>
									<img src={Poster} alt={imdbID} />
								</div>
							</div>
						</NavLink>
					);
				})}
			</div>
		</section>
	);
};

export default MovieTabs;
