import React from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

const Error = () => {
	const navigate = useNavigate();
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				// alignItems: "center",
			}}
		>
			<div>
				<h1>Error 404 page</h1>
				<h2>Search for other Movies</h2>
				{/* <NavLink to="/">Go Back</NavLink> */}

				<button
					onClick={() => navigate("/")}
					className="back-btn"
					style={{
						backgroundColor: "grey",
						color: "white",
						margin: "30px",
						cursor: "pointer",
					}}
				>
					Go back
				</button>
			</div>
		</div>
	);
};

export default Error;
