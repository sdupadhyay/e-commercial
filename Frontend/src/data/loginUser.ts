import axios from "axios";

export const loginUser = async (body: Object) => {
	try {
		let res = await axios.post(
			`${import.meta.env.VITE_API_BASE_URL}/user/login`,
			body
		);
		return res;
	} catch (error) {
		return error;
	}
};
