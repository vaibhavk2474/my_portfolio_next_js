import { redirect } from "next/navigation";
import { Suspense } from "react";
import Content from "@/features/resume/UI/Content";

// 1. Define the interface right here
interface PageProps {
	searchParams: Promise<{ path?: string }>;
}
export default async function HomePage({ searchParams }: PageProps) {
	const params = await searchParams;

	if (!params.path) {
		redirect("/resume?path=about");
	}
	return (
		<Suspense fallback="Loading...">
			<Content />
		</Suspense>
	);
}
