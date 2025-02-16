import { useState } from "react";
import { LoginSignup } from "../components/LoginSignup";

export const Signup = () => {
	return (
		<>
			<LoginSignup
				heading="Signup"
				// @ts-ignore
				requiredFields={["name", "email", "number", "password"]}
				buttonTitle="Create New Account"
			/>
		</>
	);
};
