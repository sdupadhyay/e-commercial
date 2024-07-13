import { LoginSignup } from "../components/LoginSignup";

export const Signup = () => {
	const handleSignup = (event: any) => {
		event.preventDefault();
		alert("Click");
	};
	return (
		<>
			<LoginSignup
				heading="Signup"
				// @ts-ignore
				requiredFields={["name", "email", "number", "password"]}
				buttonTitle="Create New Account"
				handleClick={handleSignup}
			/>
		</>
	);
};
