import { createContext, useEffect, useState } from "react";
import { getCartItem } from "../data/cart/getCartList";
import { isUserAuthenticated } from "../utils";
import { deleteCartItem } from "../data/cart/deleteCartItem";
import { addToCart } from "../data/cart/addToCart";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const navigate = useNavigate();
	let id = isUserAuthenticated();
	const handleCart = async (productId) => {
		try {
			if (id) {
				if (cartItems?.includes(productId)) {
					await deleteCartItem(id, productId);
					setCartItems(cartItems?.filter((ele) => ele != productId));
					alert("Item Deletd from Witlist");
				} else {
					const response = await addToCart(id, productId);
					setCartItems([...cartItems, productId]);
					if (response?.data?.status == 201) alert(response?.data?.message);
				}
			} else {
				console.log("Triggered");
				navigate("/login");
			}
		} catch (error) {
			console.log("Cart Error", error);
		}
	};
	const deleteCart = (productId) => {
		setCartItems(cartItems?.filter((ele) => ele != productId));
	};

	useEffect(() => {
		getCartItem(id).then((res) =>
			setCartItems(res?.data?.data?.map((ele) => ele?.productId))
		);
	}, []);

	return (
		<CartContext.Provider value={{ cartItems, handleCart,deleteCart }}>
			{children}
		</CartContext.Provider>
	);
};
