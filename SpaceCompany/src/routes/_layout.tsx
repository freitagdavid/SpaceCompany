import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
	component: LayoutComponent,
});

function LayoutComponent() {
	return (
		<div style={{ border: "red 1px solid" }}>
			<Outlet />
		</div>
	);
}
