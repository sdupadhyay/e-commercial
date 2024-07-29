import { LoginSignup } from "../components/LoginSignup";
import { UseNotification } from "../hooks/UseNotification";

export const Login = () => {
	const { notificationComponent } = UseNotification();
	return (
		<>
			<LoginSignup
				heading="Login"
				// @ts-ignore
				requiredFields={["email", "password"]}
				buttonTitle="Login"
			/>
			{notificationComponent}
		</>
	);
};
