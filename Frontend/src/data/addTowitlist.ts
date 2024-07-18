import axios from "axios";
interface productsResponse {
	data: {
		message: string;
		status: number;
	};
}
export const addToWitlist = async (
	userId: string,
	productId: string
): Promise<productsResponse> => {
	try {
		let res = await axios.get(
			`${
				import.meta.env.VITE_API_BASE_URL
			}/witlist/add?userId=${userId}&productId=${productId}`,
			{
				responseType: "json",
			}
		);
		return res;
	} catch (error: any) {
		return error;
	}
};
