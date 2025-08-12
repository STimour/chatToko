export interface ImageWithCaptionProps {
	as: 'p' | 'span' | 'figcaption';
	imageSrc: string;

	caption: string;
	captionClassName?: string;

	imageClassName?: string;
	containerClassName?: string;

	width?: number | string;
	height?: number | string;
}
