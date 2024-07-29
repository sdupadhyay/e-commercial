import { useContext } from "react";
import { BsStarFill, BsFillHeartFill } from "react-icons/bs";
import { calculatePrice } from "../utils";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
interface productCardProps {
	title: string;
	image: string;
	discount: number;
	rating: number;
	review: number;
	mrp: number;
	_id: string;
	handleWitlist: ButtonClickHandler;
	witlistItems?: Array<string>;
	isWitlist: boolean;
	removeWitlist: Function;
	triggerNotification : Function;
}
export const ProductCard: React.FC<productCardProps> = ({
	title,
	image,
	discount,
	rating,
	review,
	mrp,
	_id,
	// handleWitlist,
	removeWitlist,
	triggerNotification,
}) => {
	const { handleWitlist, witlistItems } = useContext(AppContext);
	const witlist = () => {
		triggerNotification({message:"Added to Witlist"})
		if (removeWitlist) {
			handleWitlist(_id);
			removeWitlist(_id);
		} else handleWitlist(_id);
	};
	return (
		<>
			<div className="p-5 border flex flex-col justify-center items-center gap-2 rounded relative  hover:shadow-lg w-[270px] h-[270px]">
				<div className="w-20">
					<img src={image} width={"100%"} alt="" />
				</div>
				<span className="text-sm hover:text-primary text-center">
					<Link to={`/product/${_id}`}> {title} </Link>
				</span>
				<div className="flex gap-1 items-center">
					<div className="flex justify-center items-center gap-1 text-xs text-white bg-green-600 p-1 rounded">
						<span>{rating}</span>
						<BsStarFill />
					</div>
					<span className="text-xs text-[#878787]">({review})</span>
				</div>
				<div className="flex gap-2 text-sm">
					<strong className="">
						₹{Intl.NumberFormat().format(calculatePrice(mrp, discount))}
					</strong>
					<span className="text-[#878787] line-through">
						₹{Intl.NumberFormat().format(mrp)}
					</span>
					<span className="text-green-600">{discount}% off</span>
				</div>
				<div
					className="absolute right-2 top-2 text-lg cursor-pointer"
					// @ts-ignore
					onClick={witlist}
				>
					<BsFillHeartFill
						color={witlistItems?.includes(_id) ? "red" : "grey"}
					/>
				</div>
				{review > 100000 ? (
					<span className="text-sm bg-[#00A098] p-1 text-white rounded  font-semibold absolute left-2 top-2">
						Trending
					</span>
				) : null}
			</div>
		</>
	);
};
