import FeatureCard2 from "@/components/shared/cards/FeatureCard2";

const Features2 = () => {
	const features = [
		{
		  id: 1,
		  title: "Core Capabilities",
		  desc: `
	  DCOM-Free Architecture: Eliminates DCOM dependencies, security vulnerabilities and configuration complexities
	  
	  Full OPC Support: Full compatibility with OPC DA 2.05a/3.0, OPC HDA 1.2, and OPC AE 1.1 specifications
	  
	  Cross-Network Connectivity: Seamless communications across firewalls, domains, NAT and wide-area networks
	  
	  Plug-and-Play Setup: Deploy OPC tunnels in minutes with intuitive installation wizard and configuration tools
	  `,
		},
		{
		  id: 2,
		  title: "Security & Compliance",
		  desc: `
	  Data encryption for all OPC data transmission
	  
	  User Authentication: User access control with Windows authentication integration
	  
	  ISA/IEC 62443 Compliance: Meets industrial cybersecurity standard requirements for critical infrastructure
	  
	  Network Segmentation Support: Secure communications across DMZ and isolated network zones using a single TCP port
	  `,
		},
		{
		  id: 3,
		  title: "Performance & Reliability",
		  desc: `
	  High-Speed Data Transfer: Optimized for real-time industrial data
	  
	  Connection Redundancy: Automatic failover and reconnection capabilities for OPC Servers
	  
	  Resource Optimization: Lightweight footprint with minimal system resource usage
	  `,
		},
		{
		  id: 4,
		  title: "Management & Monitoring",
		  desc: `
	  Intuitive end user interface for managing multiple OPC tunnels
	  
	  Comprehensive logging for connection status monitoring, tracking client/server communications, and troubleshooting
	  
	  Configurable communication timeouts
	  `,
		},
	  ];
	  
	
	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-3 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Product Explanation & Features 
							</span>
							<h2 className="sec-title title-anim">
								OPCNet Broker® DA HDA AE Features
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					{features?.length
						? features?.map((feature, idx) => (
								<div key={idx} className="col-xl-6 col-md-6">
									<FeatureCard2 feature={feature} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Features2;
