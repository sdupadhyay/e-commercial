import axios from "axios";
interface productsResponse {
	data: {
		data: [
			{
				_id: string;
			}
		];
	};
}
export const getProducts = async (): Promise<productsResponse> => {
	try {
		let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/product`, {
			responseType: "json",
		});
		return res;
	} catch (error: any) {
		return error;
	}
};
