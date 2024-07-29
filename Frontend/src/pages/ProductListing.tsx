import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { getProducts } from "../data/getProducts";
import { UseNotification } from "../hooks/UseNotification";

export const ProductListing: React.FC = () => {
	const [productData, setProductData] = useState([]);
	const { notificationComponent, triggerNotification } = UseNotification();

	useEffect(() => {
		if (productData?.length == 0)
			//@ts-ignore
			getProducts().then((res) => setProductData(res?.data?.data));
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
							triggerNotification={triggerNotification}
						/>
					))}
				</div>
			</div>
			{notificationComponent}
		</>
	);
};
