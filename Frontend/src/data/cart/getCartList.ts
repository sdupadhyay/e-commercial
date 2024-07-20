import axios from "axios";
interface productsResponse {
	data: {
		data: [
			{
				productId: string;
				quantity: number;
			}
		];
	};
}
export const getCartItem = async (
	userId: string
): Promise<productsResponse> => {
	try {
		let res = await axios.get(
			`${import.meta.env.VITE_API_BASE_URL}/cart?userId=${userId}`,
			{
				responseType: "json",
			}
		);
		return res;
	} catch (error: any) {
		return error;
	}
};
