import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Carousel } from "./components/Carousel";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Carousel />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/cart" element={<h1>Cart Page</h1>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;