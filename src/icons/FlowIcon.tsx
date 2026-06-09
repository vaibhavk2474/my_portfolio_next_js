import React from "react";

function FlowIcon({ width = 25, height = 25 }: { width?: number; height?: number }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 45" fill="none" width={width} height={height}>
			<path fill="url(#paint0)" d="M13.41 37.94c-1.588.883-2.117 2.824-1.235 4.412.883 1.589 2.824 2.118 4.412 1.236L24 39.352v-.176l-3.353-5.647-7.235 4.412z" />
			<path
				fill="url(#paint1)"
				d="M27.705 15.177s-.176 0 0 0c-.176 0-.176 0 0 0L15 22.412h-.176l-.706-1.06v-.175l16.94-9.706c.53-.353.707-1.06.354-1.412L25.587 0h-.176L3 12.882c-3.176 1.941-4.412 6-2.47 9.353l11.823 20.47v-.176c-.882-1.588-.176-3.529 1.235-4.411l7.589-4.412c5.647-3.353 6.882-3.883 12-6.883.529-.352.706-1.058.352-1.411-1.235-2.294-4.235-7.412-5.823-10.235z"
			/>
			<defs>
				<linearGradient id="paint0" x1="8.758" y1="36.723" x2="27.464" y2="41.181" gradientUnits="userSpaceOnUse">
					<stop stopColor="#4E037A" />
					<stop offset="0.351" stopColor="#2B0B3C" />
					<stop offset="1" stopColor="#9400D3" />
				</linearGradient>
				<linearGradient id="paint1" x1="4.678" y1="29.382" x2="33.159" y2="12.928" gradientUnits="userSpaceOnUse">
					<stop stopColor="#F857A6" />
					<stop offset="1" stopColor="#FF5858" />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default FlowIcon;
