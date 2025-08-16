import { useState, type FC } from 'react';
import type { ImageProps } from './Image.types';
import { generateCleanAltText } from '../../../utils/generateAltText';

const Image: FC<ImageProps> = ({
	className = '',
	src = '',
	fallback = '/placeholder.jpg', // image de remplacement
	...props
}) => {
	const [error, setError] = useState(false);

	return (
		<img
			className={className}
			src={error ? fallback : src}
			alt={generateCleanAltText(src)}
			onError={() => setError(true)}
			{...props}
		/>
	);
};

export default Image;
