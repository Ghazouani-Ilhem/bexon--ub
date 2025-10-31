"use client";

import Image from "next/image";
import Link from "next/link";
const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site_logo">
			<Link className="logo" href="/">
				<Image
					src={
						headerType === 2 && !isStickyHeader
							? "/images/logos/logo-io.webp"
							: "/images/logos/logo-io.webp"
					}
					alt=""
					width={544}
					height={152}
					style={{ height: "auto" }}
				/>
			</Link>
		</div>
	);
};

export default Logo;
