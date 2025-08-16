import type { FC, JSX } from 'react';
import type { HeadingProps } from './Heading.types';
import { multipleClassName } from '../../../utils/multipleClassName';

export const headingVariants = {
	1: 'text-6xl',
	2: 'text-5xl',
	3: 'text-4xl',
	4: 'text-3xl',
	5: 'text-2xl',
	6: 'text-xl',
};

const Heading: FC<HeadingProps> = ({ level, children, className = '' }) => {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements;
	const policeSize = headingVariants[level];

	return (
		<Tag className={multipleClassName(policeSize, className)}>
			{children}
		</Tag>
	);
};
export default Heading;
