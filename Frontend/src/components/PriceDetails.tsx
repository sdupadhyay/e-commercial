import { calculatePrice } from "../utils";

interface props {
	mrp: number;
	discount: number;
}
export const ProductPriceDetails: React.FC<props> = ({ mrp, discount }) => {
	return (
		<div className="flex gap-2 text-sm">
			<strong className="">
				₹{Intl.NumberFormat().format(calculatePrice(mrp, discount))}
			</strong>
			<span className="text-[#878787] line-through">
				₹{Intl.NumberFormat().format(mrp)}
			</span>
			<span className="text-green-600">{discount}% off</span>
		</div>
	);
};
