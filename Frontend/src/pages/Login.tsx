import { LoginSignup } from "../components/LoginSignup";

export const Login = () => {
    
	return (
		<>
			<LoginSignup
				heading="Login"
				// @ts-ignore
				requiredFields={["email", "password"]}
				buttonTitle="Login"
			/>
		</>
	);
};
