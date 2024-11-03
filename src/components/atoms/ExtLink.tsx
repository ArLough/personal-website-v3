import { ReactNode } from "react";

interface ExtLinkProps {
	href: string;
	children: ReactNode;
	hideIcon?: boolean;
}

export default function ExtLink({ href, children, hideIcon }: ExtLinkProps) {
	return (
		<a className="inline-block underline hover:text-hover" href={href}>
			{children}
			{!hideIcon && (
				<div className="inline-block align-text-top">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2.5}
						stroke="currentColor"
						className="size-2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
						/>
					</svg>
				</div>
			)}
		</a>
	);
}
