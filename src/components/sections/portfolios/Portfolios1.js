"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PortfolioCard1 from "@/components/shared/cards/PortfolioCard1";
import getPortfolio from "@/libs/getPortfolio";
import { useRef } from "react";
const Portfolios1 = () => {
	const animContainerRef = useRef();
	const portfolio = getPortfolio()?.slice(0, 1);
	return (
		<section className="tj-project-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title " data-wow-delay=".3s">
								<i className="tji-box"></i>OPCNet Broker® DA HDA AE Overview
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading">
									<h2 className="sec-title title-anim">
									OPCNet Broker® DA HDA AE is an all-in-one  <span>OPC tunneling product.</span>
									</h2>
								</div>
								<p className="desc " >
									OPCNet Broker® DA HDA AE is an all-in-one OPC tunneling product that eliminates DCOM 
									configuration headaches while providing secure and encrypted communications for OPC Data Access, 
									Historical Data Access, and Alarms & Events across firewalls and network segments. 
									Deploy reliable remote OPC connectivity in minutes, not hours. 
								</p>
								
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="project-area tj-arrange-container">
							{portfolio?.length
								? portfolio?.map((portfolioSingle, idx) => (
										<PortfolioCard1 key={idx} portfolio={portfolioSingle} />
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios1;
