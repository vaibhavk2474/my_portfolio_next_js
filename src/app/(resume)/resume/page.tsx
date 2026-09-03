import Content from "@/features/resume/UI/Content";
import { Suspense } from "react";

export default function HomePage() {
	return (
		<Suspense fallback="Loading...">
			<Content />
		</Suspense>
	);
}
