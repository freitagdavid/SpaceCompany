import type { ReactElement, ReactNode } from "react";

export default function RootContainer({ children }: { children: ReactNode }): ReactElement {
	return <div className="w-screen h-screen px-10">{children}</div>;
}