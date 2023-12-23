import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import SingleMovie from "./pages/SingleMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import { AppProvider } from "./context/context";
import Register from "./pages/Register";
import Login from "./pages/Login";
import WatchNow from "./pages/WatchNow";

function App() {
	return (
		<>
			<AppProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/movie/:id" element={<SingleMovie />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="watchNow" element={<WatchNow />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</BrowserRouter>
			</AppProvider>
		</>
	);
}

export default App;
