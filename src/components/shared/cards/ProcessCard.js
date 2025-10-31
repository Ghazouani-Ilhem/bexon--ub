import makeWowDelay from "@/libs/makeWowDelay";
import modifyNumber from "@/libs/modifyNumber";

const ProcessCard = ({ processSingle, idx }) => {
	const { title, img, desc, id } = processSingle ? processSingle : {};
	return (
		<div
			className="process-item wow fadeInLeft"
			data-wow-delay={makeWowDelay(idx, 0.3)}
		>
			<div className="process-step">
				<span>{id}</span>
			</div>
			<div className="process-content">
				<h4 className="title">{title}</h4>
				<ul className="desc list-disc pl-5 ">
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

export default ProcessCard;
