import type { LinkProps } from "../../atoms/Link";

export interface LinkWithIconProps extends LinkProps {
	href: string;
	imageSrc: string;
	width: string;
	height: string;
	text?: string;
	textClassName?: string;
	imageClassName?: string;
	linkClassName?: string;
}
