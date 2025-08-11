import { useState, type FC } from 'react';
import type { ImageProps } from './Image.types';
import { generateAltText } from '../../../utils/generateAltText';

const Image: FC<ImageProps> = ({
	className = '',
	src = '',
	fallback = '/placeholder.jpg', // image de remplacement
	...props
}) => {
	const [error, setError] = useState(false);

	return (
		<img
			className={` ${className}`}
			src={error ? fallback : src}
			alt={generateAltText(src)}
			onError={() => setError(true)}
			{...props}
		/>
	);
};

export default Image;
