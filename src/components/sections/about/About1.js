import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Ratings1 from "@/components/shared/ratings/Ratings1";
import Image from "next/image";
import Link from "next/link";
const About1 = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6 order-lg-1 order-2">
						<div
							className={`about-img-area wow fadeInLeft`}
							data-wow-delay=".2s"
						>
							<div className="about-img overflow-hidden">
								<Image
									
									src="/images/architecture/onb.png"
									alt="opcnet broker da hda ae"
									width={853}
									height={875}
								/>
							</div>
							
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 order-lg-2 order-1">
						<div
							className={`about-content-area style-1 wow fadeInLeft`}
							data-wow-delay=".2s"
						>
							<div className="sec-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>OPCNet Broker® DA HDA AE Overview
								</span>
								<p className="sec-title ">
								OPCNet Broker® DA HDA AE is an all-in-one OPC tunneling product that eliminates DCOM configuration headaches while providing secure and encrypted communications for OPC Data Access, Historical Data Access, and Alarms & Events across firewalls and network segments. Deploy reliable remote OPC connectivity in minutes, not hours. {" "}
									
								</p>
							</div>
							<div className="wow fadeInUp" data-wow-delay=".5s">
								<ButtonPrimary
									text={"Technical Datasheet"}
									url={"#"}
									isTextBtn={true}
								/>
							</div>
						</div>
					
					</div>
				</div>
			</div>
		</section>
	);
};

export default About1;
