import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";
import { validate_phone_number, validateEmail } from "../utils";
import { createAccount } from "../data/createAccount";
import { loginUser } from "../data/loginUser";
import { UseNotification } from "../hooks/UseNotification";

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
}) => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		name: "",
		number: "",
	});
	const [formError, setFormError] = useState({
		email: "",
		password: "",
		name: "",
		number: "",
	});
	let errorCheck = {
		email: "",
		password: "",
		name: "",
		number: "",
	};
	const navigate = useNavigate()
	const { notificationComponent, triggerNotification } = UseNotification();
	const handleChange = (event: any) => {
		//console.log(event?.target);
		setFormData({ ...formData, [event.target.name]: event.target.value });
		setFormError({ ...formError, [event.target.name]: "" });
	};
	const handleSubmit = async (event: any) => {
		let flag = 0;
		event.preventDefault();
		const { email, password, name, number } = formData;
		if (requiredFields?.length > 2) {
			if (!email || !validateEmail(email)) {
				flag = 1;
				errorCheck = { ...errorCheck, email: "Please Enter Valid Email" };
			}
			if (!name) {
				flag = 1;
				errorCheck = { ...errorCheck, name: "Please Enter Name" };
			}
			if (!number || !validate_phone_number(number)) {
				flag = 1;
				errorCheck = { ...errorCheck, number: "Please Enter Phone Number" };
			}
			if (!password) {
				flag = 1;
				errorCheck = { ...errorCheck, password: "Please Enter Password" };
			}
			if (flag) setFormError(errorCheck);
			else {
				const signupData = {
					name: formData?.name,
					email: formData?.email,
					mobile: formData?.number,
					password: formData?.password,
				};
				let response = await createAccount(signupData);
				console.log(response);
			}
		} else {
			if (!email || !validateEmail(email)) {
				flag = 1;
				errorCheck = { ...errorCheck, email: "Please Enter Valid Email" };
			}
			if (!password) {
				flag = 1;
				errorCheck = { ...errorCheck, password: "Please Enter Password" };
			}
			if (flag) setFormError(errorCheck);
			else {
				const response = await loginUser({
					email: formData?.email,
					password: formData?.password,
				});
				if (response?.data?.status == 200) {
					sessionStorage.setItem("userId", response?.data?.userId);
					triggerNotification({ message: "Login Sucess" });
					//console.log(response.data);
					setFormData({ email: "", password: "", name: "", number: "" });
					navigate("/")
				}
			}
		}
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
											error={formError["email"]}
											value={formData["email"]}
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
											error={formError["name"]}
											value={formData["name"]}
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
											error={formError["number"]}
											value={formData["number"]}
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
											error={formError["password"]}
											value={formData["password"]}
										/>
									);
							}
						})}
						{/* @ts-ignore */}
						<Button buttonTitle={buttonTitle} handleClick={handleSubmit} />

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
			{notificationComponent}
		</>
	);
};
