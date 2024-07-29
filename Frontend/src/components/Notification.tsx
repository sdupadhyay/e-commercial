import { BsCheckCircleFill } from "react-icons/bs";
interface notificationProps {
	message: string;
}
export const Notification: React.FC<notificationProps> = ({ message }) => {
	return (
		<>
			<div className="fixed left-[40%] top-5 border p-3 bg-green-700 text-white rounded-md flex items-center gap-2">
				<BsCheckCircleFill />

				<span>{message || "Item Added to The Cart"}</span>
			</div>
		</>
	);
};
