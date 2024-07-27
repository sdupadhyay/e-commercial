import { useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { CartPageCard } from "../components/CartPageCard";
import { CartPriceDetails } from "../components/CartPriceDetails";
import { getCartProduct } from "../data/cart/getCartProduct";
import { isUserAuthenticated } from "../utils";
import { deleteCartItem } from "../data/cart/deleteCartItem";
import { CartContext } from "../context/CartContext";
import { BsPlusLg } from "react-icons/bs";

export const CartPage = () => {
	interface cartProp {
		mrp: number;
		discount: number;
		qty: number;
		_id: string;
	}
	const [cartData, setCartData] = useState<cartProp[]>([]);
	const { deleteCart } = useContext(CartContext);
	let userId = isUserAuthenticated();

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
		setCartData(
			cartData?.map((ele) =>
				//@ts-ignore
				ele?._id == id ? { ...ele, qty: ele?.qty - 1 } : ele
			)
		);
	};
	const handleDelete = (productId: string) => {
		//@ts-ignore
		deleteCartItem(userId, productId).then((res) => console.log(res));
		setCartData(cartData?.filter((ele) => ele?._id != productId));
		deleteCart(productId);
	};
	const calculateCartPriceDetails = () => {
		const total = cartData?.reduce((acc, ele) => acc + ele?.mrp * ele?.qty, 0);
		const totalDiscount = Math.round(
			cartData?.reduce(
				(acc, ele) => acc + (ele?.mrp * ele?.discount * ele?.qty) / 100,
				0
			)
		);
		const totalAmount = total - totalDiscount;
		return {
			total,
			totalDiscount,
			totalAmount,
		};
	};
	useEffect(() => {
		//@ts-ignore
		getCartProduct(userId).then((res) =>
			//@ts-ignore
			setCartData(res?.data?.data?.map((ele) => ({ ...ele, qty: 1 })))
		);
	}, []);
	return (
		<>
			{cartData?.length > 0 ? (
				<div className="flex flex-col lg:flex-row gap-4 lg:px-24 lg:py-10">
					<div className="w-full lg:w-3/5 flex flex-col gap-3">
						<div className="flex flex-col border p-3 gap-1  rounded-lg text-sm">
							<div className="flex gap-2">
								<input type="radio" name="address" />
								<span>
									Delivery to:{" "}
									<span className="font-bold">Sumit Upadhyay, 122001</span>
								</span>{" "}
								<span className="whitespace-nowrap rounded bg-[#f0f2f5] px-2.5 py-0.5  text-xs text-[#717478]">
									HOME
								</span>
							</div>
							<span className="text-[#717478]">
								Room No 211,Green Leaf Residency, 56/6, Mehrault Road ...
							</span>
						</div>
						<div className="flex border p-3 gap-5  rounded-lg text-sm items-center">
							<BsPlusLg className="text-primary" />
							<span className="text-primary">Add a new Address</span>
						</div>
						{cartData?.length > 0 &&
							cartData?.map((ele: object, ind) => (
								//@ts-ignore
								<CartPageCard
									{...ele}
									key={ind}
									handleINC={handleINC}
									handleDNC={handleDNC}
									handleDelete={handleDelete}
								/>
							))}
					</div>
					<div className="w-full lg:w-2/5 lg:border p-4 flex flex-col gap-5 rounded-lg ">
						<CartPriceDetails
							{...calculateCartPriceDetails()}
							items={cartData?.length}
						/>
						<Button buttonTitle="PLACE ORDER" />
					</div>
				</div>
			) : (
				<div>
					<p className="text-center mt-9 ">Your Cart is Empty</p>
				</div>
			)}
		</>
	);
};
