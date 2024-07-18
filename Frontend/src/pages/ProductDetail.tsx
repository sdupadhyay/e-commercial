import { useEffect, useState } from "react";
import { BsBagFill, BsStarFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../data/getProductDetails";
interface Params {
	productId: string;
}
interface details {
	title: string;
	image: string;
	description: string;
	category: string;
}
export const ProductDetailPage: React.FC = () => {
	//@ts-ignore
	const { productId } = useParams<Params>();
	const [productDetails, setProductDetails] = useState<details>();
	useEffect(() => {
		//@ts-ignore
		getProductDetails(productId).then((res) =>
			//@ts-ignore
			setProductDetails(res.data.data[0])
		);
	}, []);
	return (
		<>
			<div className="flex flex-col justify-center items-center h-[500px] mt-[140px] lg:my-12">
				<div className="border flex flex-col lg:flex-row gap-8 lg:gap-10 p-6 rounded items-center relative">
					<div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[400px] lg:shadow-lg p-1">
						<img src={productDetails?.image} className="w-full h-full" />
					</div>
					<div className="flex flex-col w-fit gap-3 lg:w-[700px]">
						<h1 className="text-3xl">{productDetails?.title}</h1>
						<div className="flex items-center gap-4">
							<div className="flex justify-center items-center gap-1 text-lg text-white bg-green-600 p-1 rounded">
								<span>4.5</span>
								<BsStarFill />
							</div>
							<span className="text-lg text-[#878787]">3,456 Rating</span>
						</div>
						<div className="flex gap-2 text-lg">
							<strong className="">₹{Intl.NumberFormat().format(2375)}</strong>
							<span className="text-[#878787] line-through">
								₹{Intl.NumberFormat().format(34785)}
							</span>
							<span className="text-green-600">{12}% off</span>
						</div>
						<div className="text-sm">
							<p>{productDetails?.description}</p>
						</div>
						<div className="flex justify-center lg:justify-start">
							<button className="bg-primary text-white p-3 flex gap-2 items-center rounded-md">
								<BsBagFill />
								Add To Bag
							</button>
						</div>
						<span className="text-lg bg-[#00A098] p-1 text-white rounded  font-semibold absolute right-1 top-1/2 lg:top-1">
							{productDetails?.category}
						</span>
					</div>
				</div>
			</div>
		</>
	);
};
