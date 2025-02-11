import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "./-components/Header";
import RootContainer from "../components/RootContainer";

function TabButton({
	to,
	children,
}: { to: string; children: React.ReactNode }) {
	return (
		<Link to={to} activeOptions={{ exact: true }}>
			{({ isActive }) => {
				return (
					<div
						className={`flex h-11 justify-center items-center px-4 text-sm font-[Helvetica_Neue] ${isActive ? "outline-1" : ""}`}
					>
						{children}
					</div>
				);
			}}
		</Link>
	);
}

export const Route = createRootRoute({
	component: () => (
		<RootContainer>
			<Header />
			<div className="w-full border-b-1 gap-4 flex pt-4">
				<TabButton to="/">Resources</TabButton>
				<TabButton to="/Research">Research</TabButton>
				{/* <Link to="/Research">Research</Link> */}
			</div>
			<Outlet />
			<TanStackRouterDevtools />
		</RootContainer>
	),
});
