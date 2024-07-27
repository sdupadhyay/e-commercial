export const validateEmail = (email: string) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};
export const validate_phone_number = (mobile_number: string) => {
	let regex = new RegExp(/[6-9][0-9]{9}/);
	if (mobile_number == null || String(mobile_number).length != 10) {
		return false;
	}
	if (regex.test(mobile_number)) {
		return true;
	}
	return false;
};
export const isUserAuthenticated = (): string | boolean => {
	let userId = sessionStorage.getItem("userId");
	if (userId) return userId;
	return false;
};
export const calculatePrice = (mrp: number, discount: number) => {
	let sellingPrice = (mrp * (100 - discount)) / 100;
	return Math.round(sellingPrice);
};
export const totalDiscount = (mrp: number, discount: number) => {
	return Math.round((mrp * discount) / 100);
};
