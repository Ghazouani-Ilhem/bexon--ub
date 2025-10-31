import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const Funfact1 = () => {
	return (
		<div className="tj-countup-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="countup-wrap">
							<div className="countup-item">
								<FunfactSingle currentValue={90} symbol={"%"} />
								<span className="count-text">Fewer OPC Communications Issues</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={500} symbol={"+"} />

								<span className="count-text">Successful Deployments.</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
						
							<div className="countup-item">
								<FunfactSingle currentValue={99} symbol={"%"} />
								<span className="count-text">Uptime Guarantee</span>
								
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Funfact1;
