import ButtonPrimary from "../buttons/ButtonPrimary";

const FeatureCard2 = ({ feature, idx }) => {
	const { icon, title, desc } = feature ? feature : {};
	return (
		<div className="choose-box style-2 right-swipe">
			<div className="choose-content">
				<div className="choose-icon">
					<i className={icon}></i>
				</div>
				<h4 className="title">{title}</h4>
				<ul className="desc list-disc pl-5 list-items">
				{desc
				?.trim()
				.split("\n")
				.filter((line) => line.trim() !== "")
				.map((line, index) => (
					<li key={index}>{line}</li>
				))}
			</ul>
				
			</div>
		</div>
	);
};

export default FeatureCard2;
