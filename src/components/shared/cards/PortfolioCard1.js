import Link from "next/link";

const PortfolioCard1 = ({ portfolio }) => {
	const {
		title = "Event Management Platform",
		img = "/images/project/project-1.webp",
		shortDesc,
		id,
		dataFilter,
		category = "Connect",
	} = portfolio ? portfolio : {};
	return (
		<div className="project-item tj-arrange-item">
			<div
				className="project-img"
				style={{ backgroundImage: `url(${img})` }}
			></div>
		
		</div>
	);
};

export default PortfolioCard1;
