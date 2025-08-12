import type { LinkProps } from "../../atoms/Link";

export interface LinkWithIconProps extends Omit<LinkProps, 'children'> {
	href: string;
	imageSrc: string;
	text: string;
	width: string;
	height: string;
	textClassName?: string;
	imageClassName?: string;
	linkClassName?: string;
}
