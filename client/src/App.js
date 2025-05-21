import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/main";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/Signup" exact element={<Signup />} />
			<Route path="/Login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;