import axios from "axios";
interface productsResponse {
	data: {
		message: string;
		status: number;
	};
}
export const deleteWitlist = async (
	userId: string,
	productId: string
): Promise<productsResponse> => {
	try {
		let res = await axios.delete(
			`${
				import.meta.env.VITE_API_BASE_URL
			}/witlist/delete?productId=${productId}&userId=${userId}`,
			{
				responseType: "json",
			}
		);
		return res;
	} catch (error: any) {
		return error;
	}
};
