import React from "react";
import { ProductCard } from "../components/ProductCard";

export const ProductListing: React.FC = () => {
	return (
		<>
			<h1>Product Listing Page</h1>
			<div className="flex flex-wrap gap-4">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 6, 7, 3, 5, 6, 67, 7]?.map(
					(ele: any, ind) => (
						<ProductCard key={ind} />
					)
				)}
			</div>
		</>
	);
};
