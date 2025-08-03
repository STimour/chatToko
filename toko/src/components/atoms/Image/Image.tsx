import type { FC } from 'react';
import type { ImageProps } from './Image.types';

const Image: FC<ImageProps> = ({
	className = '',
	src = '',
	alt = '',
	...props
}) => {
	return <img className={` ${className}`} src={src} alt={alt} {...props} />;
};

export default Image;
