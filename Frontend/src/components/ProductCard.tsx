import { BsStarFill, BsFillHeartFill } from "react-icons/bs";

export const ProductCard = () => {
	return (
		<>
			<div className="p-5 border w-fit flex flex-col justify-center items-center gap-2 rounded relative  hover:shadow-lg">
				<div>
					<img
						src={
							"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/s/q/-original-imags7tjfcmdzzvb.jpeg?q=70"
						}
						width={70}
						alt=""
					/>
				</div>
				<span className="text-sm hover:text-blue-600">
					OPPO A59 5G(Aqua Green, 126 GB)
				</span>
				<div className="flex gap-1 items-center">
					<div className="flex justify-center items-center gap-1 text-xs text-white bg-green-600 p-1 rounded">
						<span>4.3</span>
						<BsStarFill />
					</div>
					<span className="text-xs text-[#878787]">(884)</span>
				</div>
				<div className="flex gap-2 text-sm">
					<strong className="">₹14,270</strong>
					<span className="text-[#878787] line-through">₹14,270</span>
					<span className="text-green-600">37% off</span>
				</div>
				<div className="absolute right-2 top-2">
					<BsFillHeartFill color="grey" />
				</div>
				<span className="text-sm bg-[#00A098] p-1 text-white rounded  font-semibold absolute left-2 top-2">
					Trending
				</span>
			</div>
		</>
	);
};
