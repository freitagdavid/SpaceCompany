export default function Header() {
	return (
		<header className="w-full h-13 text-2xl bg-primary2 border-2 border-border rounded-sm p-4 flex items-center gap-4">
			<img
				src="./SpaceCompanyFavicon.png"
				className="w-10"
				alt="Space Company Logo"
			/>
			<h1 className="text-lg font-[Helvetica_Neue] text-brand">
				Space Company
			</h1>
			<p className="text-base text-brand font-[Helvetica_Neue]">
				V0.5.1.2 Beta React
			</p>
		</header>
	);
}
