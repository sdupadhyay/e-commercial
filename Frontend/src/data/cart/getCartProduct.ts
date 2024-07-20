import axios from "axios";
interface loginResponse {
	data: {
		 data:[{
            title: string
         }]
	};
}
export const getCartProduct = async (body: object): Promise<loginResponse> => {
	try {
		let res = await axios.post(
			`${import.meta.env.VITE_API_BASE_URL}/cart/items`,
			body
		);
		return res;
	} catch (error: any) {
		return error;
	}
};
