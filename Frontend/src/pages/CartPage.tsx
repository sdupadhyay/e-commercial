import { useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { CartPageCard } from "../components/CartPageCard";
import { CartPriceDetails } from "../components/CartPriceDetails";
import { CartContext } from "../context/CartContext";
import { getCartProduct } from "../data/cart/getCartProduct";

export const CartPage = () => {
	const { cartItems } = useContext(CartContext);
	const [cartData, setCartData] = useState([]);
	const body = {
		productIDs: JSON.stringify(cartItems),
	};

	//console.log(cartData)
	const handleINC = (id: string) => {
		//@ts-ignore
		setCartData(
			cartData?.map((ele) =>
				//@ts-ignore
				ele?._id == id ? { ...ele, qty: ele?.qty + 1 } : ele
			)
		);
	};
	const handleDNC = (id: string) => {
		//@ts-ignore
		setCartData(
			cartData?.map((ele) =>
				//@ts-ignore
				ele?._id == id ? { ...ele, qty: ele?.qty - 1 } : ele
			)
		);
	};
	const total = cartData?.reduce((acc, ele) => acc + ele?.mrp * ele?.qty, 0);
	useEffect(() => {
		//@ts-ignore
		getCartProduct(body).then((res) =>
			//@ts-ignore
			setCartData(res?.data?.data?.map((ele) => ({ ...ele, qty: 1 })))
		);
	}, []);
	console.log(cartData);
	return (
		<>
			<div className="flex flex-col lg:flex-row gap-4 lg:px-24 lg:py-10">
				<div className="w-full lg:w-3/5 flex flex-col gap-3">
					{cartData?.map((ele: object, ind) => (
						//@ts-ignore
						<CartPageCard
							{...ele}
							key={ind}
							handleINC={handleINC}
							handleDNC={handleDNC}
						/>
					))}
				</div>
				<div className="w-full lg:w-2/5 lg:border p-4 flex flex-col gap-5 rounded-lg ">
					<CartPriceDetails total={total} />
					<Button buttonTitle="PLACE ORDER" />
				</div>
			</div>
		</>
	);
};
