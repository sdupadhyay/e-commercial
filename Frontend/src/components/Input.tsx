type InputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
interface inputProps {
	inputType: string;
	placeHolder: string;
	handleChange?: InputChangeHandler;
	inputName: string;
	error?: string;
	value?: string | number;
}
export const Input: React.FC<inputProps> = ({
	inputType = "text",
	placeHolder,
	handleChange,
	inputName,
	error,
	value,
}) => {
	return (
		<>
			<div className="">
				<label htmlFor={inputType} className="sr-only">
					{inputType}
				</label>

				<div className="relative">
					<input
						type={inputType}
						className="w-full rounded-lg border-red-200 p-4 pe-12 text-sm shadow-sm"
						placeholder={placeHolder}
						onChange={handleChange}
						name={inputName}
						value={value}
					/>
				</div>
				{error && <p className="text-red-600 text-sm p-1">{error}</p>}
			</div>
		</>
	);
};
