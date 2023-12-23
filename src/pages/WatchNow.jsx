import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
const WatchNow = () => {
	const navigate = useNavigate();
	const [status, setStaus] = useState(false);
	const [user, setUser] = useState({});
	const userDetails = JSON.parse(localStorage.getItem("user"));
	const logoutUser = () => {
		localStorage.clear();
		signOut(auth)
			.then(() => {
				console.log("Signout Successfull!");
			})
			.catch((err) => {
				console.log("There is error while singning out !", err);
			});
		navigate("/");
	};
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			console.log(user);
			if (user) {
				setStaus(true);
			}
			setUser(user);
		});
	}, []);
	return (
		<div>
			{localStorage.getItem("Loggedin") || status ? (
				<div style={{ textAlign: "center" }}>
					<h1
						className="vp-heading"
						style={{
							textAlign: "center",
							margin: "50px",
							fontSize: "30px",
							color: "white",
						}}
					>
						{status
							? `Welcome ${user.displayName}, Enjoy Watching !`
							: `Welcome ${userDetails?.name}, Enjoy Watching !`}
					</h1>
					<div className="video-player">
						<ReactPlayer
							controls={true}
							height={400}
							width={800}
							style={{ height: "700px" }}
							url="https://youtu.be/8pDqJVdNa44?si=WiKRB9r2M4R4ewtn"
						/>
					</div>

					<div style={{ margin: "20px" }}>
						<button
							className="back-btn"
							style={{
								backgroundColor: "grey",
								color: "white",
								margin: "10px",
								fontSize: "1.8rem",
								borderRadius: "0.5rem",
								border: "0.2rem solid var(--text-clr)",
								cursor: "pointer",
							}}
							onClick={logoutUser}
						>
							Logout
						</button>
						<button
							className="back-btn"
							style={{
								backgroundColor: "grey",
								color: "white",
								margin: "10px",
								fontSize: "1.8rem",
								borderRadius: "0.5rem",
								border: "0.2rem solid var(--text-clr)",
								cursor: "pointer",
							}}
							onClick={() => navigate("/")}
						>
							Go Home
						</button>
					</div>
				</div>
			) : (
				<div>
					<h1
						style={{
							color: "white",
							textAlign: "center",
							marginTop: "50px",
						}}
					>
						Please Login first
					</h1>
				</div>
			)}
		</div>
	);
};

export default WatchNow;
