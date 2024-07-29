import { useEffect, useState } from "react";
import { isUserAuthenticated } from "../utils";
import { getWitlistProduct } from "../data/witlist/getWitlistProduct";
import { ProductCard } from "../components/ProductCard";
interface details {
	title: string;
	image: string;
	description: string;
	category: string;
	_id: string;
	mrp: number;
}
export const WitlistPage = () => {
	const userId = isUserAuthenticated();
	const [witlistData, setWitlistData] = useState<details>();
	const removeWitlist = (id: string) => {
		//@ts-ignore
		setWitlistData(witlistData?.filter((ele) => ele?._id != id));
	};
	useEffect(() => {
		//@ts-ignore
		getWitlistProduct(userId)
			//@ts-ignore
			.then((res) => setWitlistData(res?.data?.data))
			.catch((err) => console.log("Witlist Page Error", err));
	}, []);
	return (
		<div className="p-6">
			<div className="flex flex-wrap gap-5">
				{witlistData?.map((ele: any, ind) => (
					<ProductCard key={ind} {...ele} removeWitlist={removeWitlist} />
				))}
			</div>
		</div>
	);
};
