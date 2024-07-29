import { useState } from "react";
import { Notification } from "../components/Notification";

export const UseNotification = () => {
	const [notification, setNotification] = useState(null);
	let timer:any;
	const triggerNotification = (notificationProp:object) => {
		clearTimeout(timer);
		setNotification(notificationProp);
		timer = setTimeout(() => {
			setNotification(null);
		}, 5000);
	};
    //console.log("Notification",notification)
	const notificationComponent = notification ? (
		<Notification {...notification} />
	) : null;
	return { notificationComponent, triggerNotification };
};
