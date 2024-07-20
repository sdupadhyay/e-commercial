interface prop {
	total: number;
}
export const CartPriceDetails: React.FC<prop> = ({ total }) => {
	return (
		<>
			<span className="text-[#878787] font-bold">PRICE DETAILS</span>
			<div className="flex flex-col gap-2">
				<div className="flex justify-between">
					<span>Price (1 items)</span>
					<span>₹{total}</span>
				</div>
				<div className="flex justify-between">
					<span>Discount</span>
					<span>− ₹7,542</span>
				</div>
				<div className="flex justify-between">
					<span>Delivery Charges</span>
					<span>Free</span>
				</div>
			</div>
			<hr />
			<div className="">
				<div className="flex justify-between">
					<strong>Total Amount</strong>
					<strong>₹2,284</strong>
				</div>
			</div>
			<hr />
		</>
	);
};
