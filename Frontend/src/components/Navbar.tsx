import { useContext } from "react";
import { BsBag, BsHeart, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { CartContext } from "../context/CartContext";
export const Navbar = () => {
	const { witlistItems } = useContext(AppContext);
	const { cartItems } = useContext(CartContext);

	return (
		<>
			<header className="flex justify-between items-center shadow-md p-2">
				<div>
					<span className="text-primary text-2xl">ELECTRONICES STORE</span>
				</div>
				<div className="w-2/4">
					<input
						type="search"
						placeholder="Search for Product and much more"
						className="p-2 shadow bg-[#f5f5f6] w-full"
					/>
				</div>
				<div>
					<ul className="flex gap-1 items-center justify-center">
						<Link to={"/witlist"}>
							<li className="text-2xl relative p-2">
								<BsHeart />
								{witlistItems?.length > 0 && (
									<span className="text-sm text-white absolute top-0 right-0 bg-primary rounded-full w-4 flex items-center justify-center">
										{witlistItems?.length}
									</span>
								)}
							</li>
						</Link>
						<Link to="/cart">
							<li className="text-2xl relative p-2">
								<BsBag />
								{cartItems?.length > 0 && (
									<span className="text-sm text-white absolute top-0 right-0 bg-primary rounded-full w-4 flex items-center justify-center">
										{cartItems?.length}
									</span>
								)}
							</li>
						</Link>
						<li className="text-3xl p-2">
							<BsPerson />
						</li>
					</ul>
				</div>
			</header>
		</>
	);
};
