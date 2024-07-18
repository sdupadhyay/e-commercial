import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { getProducts } from "../data/getProducts";
import { isUserAuthenticated } from "../utils";
import { useNavigate } from "react-router-dom";
import { deleteWitlist } from "../data/deleteWitlist";
import { addToWitlist } from "../data/addTowitlist";
import { getWitlistItem } from "../data/getWitlistItem";

export const ProductListing: React.FC = () => {
	const navigate = useNavigate();
	const [productData, setProductData] = useState([]);
	const [witlistItems, setWilistItems] = useState([]);
	const handleWitlist = async (productId: string) => {
		try {
			let id = isUserAuthenticated();
			console.log(id);
			if (id) {
				//const isItemPresent = await checkWitlist(productId);
				if (witlistItems?.includes(productId)) {
					//@ts-ignore
					await deleteWitlist(id, productId);
					setWilistItems(witlistItems?.filter((ele) => ele != productId));
					//console.log(res);
					alert("Item Deletd from Witlist");
				} else {
					//@ts-ignore
					const response = await addToWitlist(id, productId);
					//@ts-ignore
					setWilistItems([...witlistItems, productId]);
					if (response?.data?.status == 201) alert(response?.data?.message);
				}
			} else {
				console.log("Triggered");
				navigate("/login");
			}
		} catch (error) {
			console.log("WITLIST Error", error);
		}
	};
	useEffect(() => {
		if (productData?.length == 0)
			//@ts-ignore
			getProducts().then((res) => setProductData(res?.data?.data));
		if (witlistItems?.length == 0)
			getWitlistItem().then((res) =>
				//@ts-ignore
				setWilistItems(res?.data?.data?.map((ele) => ele?.productId))
			);
	}, []);
	return (
		<>
			<h1>Product Listing Page</h1>
			<div className="flex">
				{/* <div className="border grid grid-cols-12">Filter Page</div> */}
				<div className="flex flex-wrap gap-4">
					{productData?.map((ele: any, ind) => (
						<ProductCard
							key={ind}
							{...ele}
							handleWitlist={handleWitlist}
							witlistItems={witlistItems}
							isWitlist={witlistItems?.includes(ele?._id)}
						/>
					))}
				</div>
			</div>
		</>
	);
};
