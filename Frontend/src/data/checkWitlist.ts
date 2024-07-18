import axios from "axios";
interface productsResponse {
	data: {
		isItemPresent: boolean;
		status: number;
	};
}
export const checkWitlist = async (
	productId: string
): Promise<productsResponse> => {
	try {
		let res = await axios.get(
			`${
				import.meta.env.VITE_API_BASE_URL
			}/witlist/find?productId=${productId}`,
			{
				responseType: "json",
			}
		);
		return res;
	} catch (error: any) {
		return error;
	}
};
