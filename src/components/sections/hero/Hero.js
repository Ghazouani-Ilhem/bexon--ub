import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="tj-banner-section section-gap-x">
			<div className="banner-area">
				<div className="banner-left-box">
					<div className="banner-content">
						<span className="sub-title " data-wow-delay=".2s">
							<i className="tji-excellence"></i> OPCNet Broker DA HDA AE
						</span>
						<h1 className="banner-title ">
						Secure, DCOM-Free OPC Tunneling – Connecting Industrial Networks Without Complexity 
						</h1>
						<div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
							
							<div className="banner-desc">
							
							</div>
						</div>
					</div>
					<div className="banner-shape">
						<img src="/images/shape/pattern-bg.webp" alt="" />
					</div>
				</div>
				<div className="banner-right-box">
					<div className="banner-img">
						<Image
							data-speed="0.8"
							src="/images/hero/bebsa3doun.jpg"
							alt=""
							width={945}
							height={793}
						/>
					</div>
					
				</div>
			</div>
			<div className="banner-scroll wow fadeInDown" data-wow-delay="2s">
				<button data-target="#choose" className="scroll-down tj-scroll-btn">
					<span>
						<i className="tji-arrow-down-long"></i>
					</span>
					Scroll Down
				</button>
			</div>
		</section>
	);
};

export default Hero;
