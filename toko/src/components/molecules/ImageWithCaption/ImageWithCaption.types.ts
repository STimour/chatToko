export interface ImageWithCaptionProps {
	imageSrc: string;
	
	width: string;
	height: string;
	
	caption: string;
	captionClassName?: string;
	
	imageClassName?: string;
	containerClassName?: string;
	
	
	as?: 'p' | 'span' | 'figcaption';
	alt?: string;
}
