import axios from "axios";
interface productsResponse {
	data: {
		data: [object];
		status: number;
	};
}
export const getProductDetails = async (
	productId: string
): Promise<productsResponse> => {
	try {
		let res = await axios.get(
			`${import.meta.env.VITE_API_BASE_URL}/product/${productId}`,
			{
				responseType: "json",
			}
		);
		return res;
	} catch (error: any) {
		return error;
	}
};
