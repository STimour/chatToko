import type { LinkProps } from "../../atoms/Link";

export interface LinkWithIconProps extends LinkProps {
	href: string;
	imageSrc: string;
	text: string;
	width: string;
	height: string;
	textClassName?: string;
	imageClassName?: string;
	linkClassName?: string;
}
