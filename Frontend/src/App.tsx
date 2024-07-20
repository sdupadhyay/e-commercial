import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Carousel } from "./components/Carousel";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { PrivateRoute } from "./utils/PrivateRoute";
import { ProductListing } from "./pages/ProductListing";
import { ProductDetailPage } from "./pages/ProductDetail";
import { CartPage } from "./pages/CartPage";
function App() {
	return (
		<>
			{/* <BrowserRouter> */}
			<Navbar />
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path="/cart" element={<CartPage />} />
				</Route>
				<Route path="/" element={<Carousel />} />
				<Route path="/product" element={<ProductListing />} />
				<Route path="/product/:productId" element={<ProductDetailPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
			{/* </BrowserRouter> */}
		</>
	);
}

export default App;
