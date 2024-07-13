import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";
interface loginSignupProp {
	heading?: string;
	requiredFields: Array<string>;
	buttonTitle: string;
	handleClick?: Function;
}

export const LoginSignup: React.FC<loginSignupProp> = ({
	heading = "Login",
	requiredFields,
	buttonTitle,
	handleClick,
}) => {
	const [formData, setFormData] = useState({});
	const [formError, setFormError] = useState({});
	const handleChange = (event: any) => {
		//console.log(event?.target);
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	return (
		<>
			<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-lg">
					<form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
						<p className="text-center text-lg font-medium">{heading}</p>
						{requiredFields?.map((ele, ind) => {
							switch (ele) {
								case "email":
									return (
										<Input
											inputType={"email"}
											placeHolder={"Enter Email"}
											handleChange={handleChange}
											inputName={"email"}
											key={ind}
										/>
									);
								case "name":
									return (
										<Input
											inputType={"text"}
											placeHolder={"Enter Name"}
											handleChange={handleChange}
											inputName={"name"}
											key={ind}
										/>
									);
								case "number":
									return (
										<Input
											inputType={"number"}
											placeHolder={"Enter Phone Number"}
											handleChange={handleChange}
											inputName={"number"}
											key={ind}
										/>
									);
								case "password":
									return (
										<Input
											inputType={"password"}
											placeHolder={"Enter Password"}
											handleChange={handleChange}
											inputName={"password"}
											key={ind}
										/>
									);
							}
						})}
						{/* @ts-ignore */}
						<Button buttonTitle={buttonTitle} handleClick={handleClick} />

						<p className="text-center text-sm text-gray-500">
							{requiredFields?.length > 2
								? "Already have an account?"
								: "Don't have an account?"}
							<Link
								className="underline"
								to={requiredFields?.length > 2 ? "/login" : "/signup"}
							>
								{requiredFields?.length > 2 ? "Sign in" : "Sign up"}
							</Link>
						</p>
					</form>
				</div>
			</div>
		</>
	);
};
