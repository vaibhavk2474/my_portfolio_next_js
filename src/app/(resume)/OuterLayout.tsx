"use client";

import InnerLayout from "./InnerLayout";

function OuterLayout({ poppins, children }: { poppins: any; children: React.ReactNode }) {
	return (
		<>
			<InnerLayout poppins={poppins}>{children}</InnerLayout>
		</>
	);
}

export default OuterLayout;
