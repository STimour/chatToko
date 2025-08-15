import type { FC } from 'react';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Link from '../../atoms/Link';
import type { LinkWithIconProps } from './LinkWithIcon.types';

const LinkWithIcon: FC<LinkWithIconProps> = ({
	href,
	imageSrc,
	text,
	textClassName,
	imageClassName,
	linkClassName,
	width,
	height,
	variant,
	externalLink,
	...linkProps
}) => {


	return (
		<Link
			href={href}
			variant={variant}
			externalLink={externalLink}
			className={linkClassName}
			{...linkProps}
		>
			<Image
				src={imageSrc}
				className={imageClassName || ''}
				width={width}
				height={height}
			/>
			{text && (
				<Text as="span" className={textClassName}>
					{text}
				</Text>
			)}
		</Link>
	);
};

export default LinkWithIcon;
