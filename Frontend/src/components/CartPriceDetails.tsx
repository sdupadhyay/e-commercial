interface prop {
	total: number;
	totalDiscount: number;
	totalAmount: number;
	items: number;
}
export const CartPriceDetails: React.FC<prop> = ({
	total,
	totalDiscount,
	totalAmount,
	items,
}) => {
	return (
		<>
			<span className="text-[#878787] font-bold">PRICE DETAILS</span>
			<div className="flex flex-col gap-2">
				<div className="flex justify-between">
					<span>Price ({items} items)</span>
					<span>₹{Intl.NumberFormat().format(total)}</span>
				</div>
				<div className="flex justify-between">
					<span>Discount</span>
					<span className="text-green-600">
						− ₹{Intl.NumberFormat().format(totalDiscount)}
					</span>
				</div>
				<div className="flex justify-between">
					<span>Delivery Charges</span>
					<span className="text-green-600">Free</span>
				</div>
			</div>
			<hr />
			<div className="">
				<div className="flex justify-between">
					<strong>Total Amount</strong>
					<strong>₹{Intl.NumberFormat().format(totalAmount)}</strong>
				</div>
			</div>
			<hr />
		</>
	);
};
