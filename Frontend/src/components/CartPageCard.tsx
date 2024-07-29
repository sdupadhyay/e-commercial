import { useState } from "react";
import { BsArrowClockwise, BsXLg } from "react-icons/bs";
import { ProductPriceDetails } from "./PriceDetails";
interface cartPageProps {
	title: string;
	image: string;
	_id: string;
	discount: number;
	mrp: number;
	qty: number;
	handleINC: Function;
	handleDNC: Function;
	handleDelete: Function;
}
export const CartPageCard: React.FC<cartPageProps> = ({
	title,
	image,
	_id,
	qty,
	handleINC,
	handleDNC,
	mrp,
	discount,
	handleDelete,
}) => {
	const [quantity, setQuantity] = useState(qty);
	const handleIncrement = () => {
		setQuantity((pre) => pre + 1);
		handleINC(_id);
	};
	const handleDecrement = () => {
		setQuantity((pre) => pre - 1);
		handleDNC(_id);
	};
	return (
		<div className="flex border p-3 gap-6 rounded-lg relative">
			<div className="w-[100px]">
				<img src={image} className="w-full" />
				<div className="flex gap-4 py-3">
					<button
						onClick={handleDecrement}
						className="w-[30px] border rounded-full"
						disabled={qty == 1}
					>
						-
					</button>
					<span className="">{quantity}</span>
					<button
						onClick={handleIncrement}
						className="w-[30px] border rounded-full"
					>
						+
					</button>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<span className="text-lg">{title}</span>
				<span className="text-xs text-[#878787]">
					Sold By: Electronics Store
				</span>
				<ProductPriceDetails mrp={mrp} discount={discount} />
				<span className="text-xs flex gap-1 items-center">
					<BsArrowClockwise />
					<b>10 Days</b> return available
				</span>
			</div>
			<div className="absolute right-3 cursor-pointer" onClick={() => handleDelete(_id,title)}>
				<BsXLg />
			</div>
		</div>
	);
};
