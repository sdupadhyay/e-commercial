import axios from "axios";
interface loginResponse {
	data: {
		message: string;
		status: number;
		userId: string;
	};
}
export const loginUser = async (body: object): Promise<loginResponse> => {
	try {
		let res = await axios.post(
			`${import.meta.env.VITE_API_BASE_URL}/user/login`,
			body
		);
		return res;
	} catch (error: any) {
		return error;
	}
};
