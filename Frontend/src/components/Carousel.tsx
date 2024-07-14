import React, { useEffect, useState } from "react";

export const Carousel = () => {
	const sliderData = [
		{
			imageUrl:
				"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/20b702cbbd0618aa.jpg?q=20",
			altTag: "moto g85 Launch",
		},
		{
			imageUrl:
				"https://rukminim2.flixcart.com/fk-p-flap/844/140/image/28cd0fb316064c29.jpg?q=50",
			altTag: "CMF by Nothing",
		},
		{
			imageUrl:
				"https://rukminim2.flixcart.com/fk-p-flap/844/140/image/19fa1370d0154baf.jpg?q=50",
			altTag: "moto g85 Launch",
		},
	];
	const [activeImage, setActiveImage] = useState(0);
	let sliderTiming: number;
	useEffect(() => {
		if (activeImage <= sliderData?.length) {
			sliderTiming = setTimeout(() => {
				setActiveImage((pre) => pre + 1);
			}, 1000);
		} else setActiveImage(0);
		return () => clearTimeout(sliderTiming);
	}, []);
	return (
		<>
			<div>
				<Slides
					image={sliderData[activeImage]?.imageUrl}
					alt={sliderData[activeImage]?.imageUrl}
				/>
				<span></span>
			</div>
			<button onClick={() => setActiveImage((pre) => pre + 1)}>NEXT</button>
		</>
	);
};
interface slideProps {
	image?: string;
	alt?: string;
}
const Slides: React.FC<slideProps> = ({ image, alt }) => {
	return (
		<div>
			<img src={image} alt={alt} width={"100%"} height={"300px"} />
		</div>
	);
};
