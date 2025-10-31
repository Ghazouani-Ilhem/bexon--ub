import Link from "next/link";

const ServiceCard2 = ({ service, idx, lastItem }) => {
	const { title, desc, id, totalProject, img, svg, iconName } = service || {};

	return (
		<div className="service-item-wrapper tj-fadein-right-on-scroll">
			<div className="service-item style-2 ">
				<div className="title-area">
					<div className="service-icon">
						<i className={iconName ? iconName : "tji-service-1"}></i>
					</div>
					<h4 className="title">
						<Link href={`/services/${id}`}>{title}</Link>
					</h4>
				</div>
				<div className="service-content">
				
					<ul className="list-items">
						<li>
							<i className="tji-list"></i> DCOM dependencies, 
							security vulnerabilities and configuration complexities 
						</li>
						<li>
							<i className="tji-list"></i>Full OPC Support: Full compatibility with OPC DA 2.05a/3.0, OPC HDA 1.2, and OPC AE 1.1 specifications 
						</li>
						<li>
							<i className="tji-list"></i>Cross-Network Connectivity: Seamless communications across firewalls, domains, NAT and wide-area networks 
						</li>
						<li>
							<i className="tji-list"></i>Plug-and-Play Setup: Deploy OPC tunnels in minutes with intuitive installation wizard and configuration tools 
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard2;
