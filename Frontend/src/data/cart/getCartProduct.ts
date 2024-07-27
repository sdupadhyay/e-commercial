import axios from "axios";
interface loginResponse {
	data: {
		data: [
			{
				title: string;
                mrp:number
			}
		];
	};
}
export const getCartProduct = async (
	userId: string
): Promise<loginResponse> => {
	try {
		let res = await axios.get(
			`${import.meta.env.VITE_API_BASE_URL}/cart/items?userId=${userId}`,
			{
				responseType: "json",
			}
		);
		return res;
	} catch (error: any) {
		return error;
	}
};
