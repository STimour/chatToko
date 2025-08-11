import type { FC } from 'react';
import type { TextProps } from './Text.types';
import { multipleClassName } from '../../../utils/multipleClassName';

const Text: FC<TextProps> = ({ as = 'p', className = '', children }) => {
	const Tag = as;

	return (
		<Tag
			className={multipleClassName('text-base text-gray-800', className)}
		>
			{children}
		</Tag>
	);
};

export default Text;
