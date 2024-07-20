import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppContextProvider } from "./context/AppContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
	<BrowserRouter>
		<AppContextProvider>
			<CartContextProvider>
				<App />
			</CartContextProvider>
		</AppContextProvider>
	</BrowserRouter>
	// </React.StrictMode>
);
