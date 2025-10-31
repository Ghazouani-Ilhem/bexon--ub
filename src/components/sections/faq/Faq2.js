import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";

const Faq2 = ({ type = 1 }) => {
	const items = [
		{
			title: "What DCOM problems does OPCNet Broker solve?",
			desc: "It replaces DCOM with a reliable TCP-based communication layer that operates through a single configurable port, simplifying connectivity, and improving resilience.",
			initActive: true,
		},
		{
			title: "Can OPCNet Broker work with existing OPC clients and servers? ",
			desc: "Yes, OPCNet Broker is completely transparent to existing OPC applications. It acts as a proxy, allowing any OPC DA, HDA, or AE client to connect to remote servers without requiring application modifications or updates.",
			initActive: false,
		},
		{
			title: "How does OPCNet Broker ensure secure communication? ",
			desc: "	OPCNet Broker ensures communication integrity through data encryption, user authentication, application whitelisting, and the Tag Security add-on, while aligning with ISA/IEC 62443 industrial cybersecurity principles.",
			initActive: false,
		},
		{
			title: "What network configurations does OPCNet Broker support? ",
			desc: "	OPCNet Broker supports communication across firewalls, NAT devices, different domains, VPNs, and DMZ configurations. It only requires a single TCP port to be opened, simplifying firewall configuration.",
			initActive: false,
		},
		{
			title: "Is there a performance impact when using OPC tunneling? ",
			desc: "	OPCNet Broker is optimized for minimal latency and high throughput, making it suitable for real-time industrial applications.",
			initActive: false,
		},
		{
			title: "How quickly can OPCNet Broker be deployed?  ",
			desc: "	 Most installations can be completed in under 30 minutes using the configuration wizard and the graphical configuration interface. No complex DCOM settings or registry modifications are required.",
			initActive: false,
		},
	];
	return (
		<section
			className={`tj-faq-section section-gap  ${
				type === 3 || type === 4 ? "" : "tj-arrange-container-2"
			}`}
		>
			<div className="container">
				<div className="row justify-content-between">
					{type === 3 ? (
						<div className="col-lg-4">
							<div className="content-wrap">
								<div className="sec-heading">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>Common Questions
									</span>
									<h2 className="sec-title title-anim">
										Need <span>Help?</span> Start Here...
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".6s">
									We stay ahead of curve, leveraging <br /> cutting-edge are
									technologies and <br /> strategies to competitive
								</p>
								<div className="wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary text={"Request a Call"} url={"/contact"} />
								</div>
							</div>
						</div>
					) : (
						<div className="col-lg-6">
							<div
								className={`faq-img-area ${
									type === 3 ? "" : "tj-arrange-item-2"
								}`}
							>
								<div className="faq-img overflow-hidden">
									<Image
										src="/images/faq/faq.webp"
										alt=""
										width={585}
										height={629}
									/>
									<h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
										Need Help? Start Here...
									</h2>
								</div>
								<div className="box-area ">
									<div className="call-box">
										<h4 className="title">Get Started Free Call? </h4>
										
										<Link className="number" href="tel:18884521505">
											<span>Contact US</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className={`col-lg-${type === 3 ? "8" : "6"}`}>
						<BootstrapWrapper>
							<div
								className={`accordion tj-faq ${
									type === 2 || type === 4 ? "style-2" : ""
								} ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
								id="faqOne"
							>
								{items?.length
									? items?.map((item, idx) => (
											<FaqItem key={idx} item={item} idx={idx} />
									  ))
									: ""}
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq2;
