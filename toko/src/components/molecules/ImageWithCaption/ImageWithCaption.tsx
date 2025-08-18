import type { FC } from 'react';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import { multipleClassName } from '../../../utils/multipleClassName';
import type { ImageWithCaptionProps } from './ImageWithCaption.types';

const ImageWithCaption: FC<ImageWithCaptionProps> = ({
	imageSrc,
	as = 'figcaption',
	ariaLabel,
	caption,
	captionClassName,
	imageClassName,
	containerClassName,
	width,
	height,
}) => {
	return (
		<div
			className={multipleClassName(
				'flex flex-col items-center text-center',
				containerClassName,
			)}
		>
			<Image
				src={imageSrc}
				className={imageClassName ? imageClassName : ''}
				width={width}
				height={height}
				alt={caption}
			/>
			<Text as={as} className={captionClassName} aria-label={ariaLabel}>
				{caption}
			</Text>
		</div>
	);
};

export default ImageWithCaption;
