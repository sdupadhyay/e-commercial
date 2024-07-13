type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
interface buttonProps {
	buttonTitle: string;
	handleClick?: ButtonClickHandler;
}
export const Button: React.FC<buttonProps> = ({ buttonTitle, handleClick }) => {
	return (
		<button
			className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white"
			onClick={handleClick}
		>
			{buttonTitle}
		</button>
	);
};
