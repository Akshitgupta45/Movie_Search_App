import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL, useGlobalContext } from "../context/context";
import Loader from "../components/Loader";

const SingleMovie = () => {
	const { id } = useParams();
	const { movie, loader, setLoader } = useGlobalContext();
	const [singleMovie, setSingleMovie] = useState({});
	// const [singleLoader,setSingleLoader] = useState()

	const getSingleMovie = async (url) => {
		setLoader(true);
		try {
			const resp = await fetch(url);
			const result = await resp.json();
			console.log(result);
			setLoader(false);
			setSingleMovie(result);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getSingleMovie(`${API_URL}&i=${id}`);
	}, []);
	if (loader) {
		return (
			<div className="movie-section">
				<Loader />
			</div>
		);
	}
	return (
		<section className="movie-section">
			<div className="movie-card">
				<figure>
					<img src={singleMovie.Poster} alt="" />
				</figure>
				<div className="card-content">
					<p className="card-text">
						Title: &nbsp;<b>{singleMovie.Title}</b>
					</p>
					<p className="card-text">
						Released Date:&nbsp;<b>{singleMovie.Released}</b>
					</p>
					<p className="card-text">
						Genre:&nbsp;<b>{singleMovie.Genre}</b>
					</p>
					<p className="card-text">
						imdbRating:&nbsp; <b>{singleMovie.imdbRating}/10</b>
					</p>
					<p className="card-text">
						Country: &nbsp;<b>{singleMovie.Country}</b>
					</p>
					<p className="card-text">
						Director:&nbsp; <b>{singleMovie.Director}</b>
					</p>
					<p className="card-text">
						Language:&nbsp; <b>{singleMovie.Language}</b>
					</p>
					<p className="card-text">
						Website:&nbsp; <b>{singleMovie.Website}</b>
					</p>
					<div style={{ display: "flex" }}>
						<NavLink
							to="/"
							className="back-btn"
							style={{
								backgroundColor: "grey",
								color: "white",
								margin: "10px",
							}}
						>
							Go Back
						</NavLink>
						<NavLink
							to="*"
							className="back-btn"
							style={{
								backgroundColor: "grey",
								color: "white",
								margin: "10px",
							}}
						>
							Watch Now
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleMovie;
