import axios from "axios";
interface witlistProductsProp {
	data: {
		data: [
			{
				title: string;
				mrp: number;
				image: string;
				description: string;
				category: string;
				_id: string;
			}
		];
	};
}
export const getWitlistProduct = async (
	userId: string
): Promise<witlistProductsProp> => {
	try {
		let res = await axios.get(
			`${import.meta.env.VITE_API_BASE_URL}/witlist/items?userId=${userId}`,
			{
				responseType: "json",
			}
		);
		return res;
	} catch (error: any) {
		return error;
	}
};
