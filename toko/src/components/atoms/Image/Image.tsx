import { useState, type FC } from 'react';
import type { ImageProps } from './Image.types';

const Image: FC<ImageProps> = ({
	className = '',
	src = '',
	alt = '',
	fallback = '/placeholder.jpg', // image de remplacement
	...props
}) => {
	const [error, setError] = useState(false);

	return (
		<img
			className={` ${className}`}
			src={error ? fallback : src}
			alt={alt}
			onError={() => setError(true)}
			{...props}
		/>
	);
};

export default Image;
