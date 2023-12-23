import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Register = () => {
	const [input, setInput] = useState({
		name: "",
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const handleInputChange = (event) => {
		setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("login/register successfull");
	};
	// code for local storage
	const handleRegister = () => {
		localStorage.setItem("user", JSON.stringify(input));
		navigate("/login");
	};

	// handling Google signIn
	const handleGoogleSignIn = () => {
		console.log("clicked");
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log("google signin", result.user.displayName);
				const userName = result.user.displayName;
				const status = true;
				navigate("/watchNow", {
					state: {
						userName,
						status,
					},
				});
			})
			.catch((err) => {
				console.log("googlesignin error", err);
			});
	};

	return (
		<div className="Register">
			<form onSubmit={handleSubmit} className="box">
				<h1>Create An Account</h1>
				<div className="ctn ">
					<input
						type="text"
						value={input.name}
						name="name"
						id="name"
						onChange={handleInputChange}
						placeholder="Name"
					/>
				</div>
				<div className="ctn ">
					<input
						type="email"
						value={input.email}
						name="email"
						id="email"
						onChange={handleInputChange}
						placeholder="Email"
					/>
				</div>
				<div className="ctn ">
					<input
						type="password"
						value={input.password}
						name="password"
						id="password"
						onChange={handleInputChange}
						placeholder="Password"
					/>
				</div>
				<div className="sign-button">
					<NavLink className="regbtn" onClick={handleRegister} to="/login">
						Register
					</NavLink>
					<div className="t">
						<NavLink
							className="regbtn"
							to="/login"
							style={{ textDecoration: "none" }}
						>
							Login
						</NavLink>
					</div>
				</div>
				<div className="sign-button ">
					<button
						className="regbtn"
						style={{
							backgroundColor: "Red",
							cursor: "pointer",
							padding: "5px 30px 5px 30px",
							fontSize: "15px",
							borderRadius: "0.5rem",
							marginTop: "3px",
						}}
						onClick={handleGoogleSignIn}
					>
						SignIn with Google
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
