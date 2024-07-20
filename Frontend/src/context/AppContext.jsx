import { createContext, useEffect, useState } from "react";
import { isUserAuthenticated } from "../utils";
import { getWitlistItem } from "../data/getWitlistItem";
import { addToWitlist } from "../data/addTowitlist";
import { deleteWitlist } from "../data/deleteWitlist";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
	const [witlistItems, setWitlistItems] = useState([]);
	let id = isUserAuthenticated();
	const navigate = useNavigate();
	useEffect(() => {
		if (id && witlistItems?.length == 0)
			getWitlistItem(id).then((res) =>
				setWitlistItems(res?.data?.data?.map((ele) => ele?.productId))
			);
	}, []);
	const handleWitlist = async (productId) => {
		try {
			if (id) {
				if (witlistItems?.includes(productId)) {
					await deleteWitlist(id, productId);
					setWitlistItems(witlistItems?.filter((ele) => ele != productId));
					alert("Item Deletd from Witlist");
				} else {
					const response = await addToWitlist(id, productId);
					setWitlistItems([...witlistItems, productId]);
					if (response?.data?.status == 201) alert(response?.data?.message);
				}
			} else {
				console.log("Triggered");
				navigate("/login");
			}
		} catch (error) {
			console.log("WITLIST Error", error);
		}
	};
	return (
		<AppContext.Provider value={{ witlistItems, handleWitlist }}>
			{children}
		</AppContext.Provider>
	);
};
