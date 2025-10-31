"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessCard from "@/components/shared/cards/ProcessCard";

const Process = () => {
	const process = [
		{
			id: "OPC DA Tunneling",
			title: "Secure tunneling for OPC DA servers. ",
			desc: `Real-time data tunneling  

					DCOM-free communication  

					Firewall-friendly   `,
		},
		{
			id: "OPC HDA Tunneling"  ,
			title: "Historical data tunneling.",
			desc: `Historical data tunneling  

				DCOM-free communication  

				Firewall-friendly  
			`,
		},
		{
			id: "OPC AE Tunneling  ",
			title: "Event and alarm tunneling.",
			desc: `Alarms and Events tunneling  

DCOM-free communication  

Firewall-friendly  `,
		},
	];
	return (
		<section className="tj-working-process section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
							Full OPC Support
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h2 className="sec-title text-anim">
									Compatible with the 3 most used <span>OPC specifications: </span>
									</h2>
								</div>
								
								<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
									<ButtonPrimary text={"Request a Demo"} url={"/#"} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="working-process-area">
							{process?.length
								? process?.map((processSingle, idx) => (
										<ProcessCard
											key={idx}
											processSingle={processSingle}
											idx={idx}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default Process;
