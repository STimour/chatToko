import type { FC } from 'react';
import type { HeadingWithDividerProps } from './HeadingWithDivider.types';
import { multipleClassName } from '../../../utils/multipleClassName';
import Heading from '../../atoms/Heading';
import Divider from '../../atoms/Divider';

const HeadingWithDivider: FC<HeadingWithDividerProps> = ({
	level,
	text,
	dividerVariant,
	containerClassName,
	textClassName,
	dividerClassName,
}) => {
	return (
		<div
			className={multipleClassName(
				'flex items-center',
				containerClassName,
			)}
		>
			<Heading level={level} className={textClassName}>
				{text}
			</Heading>
			{dividerVariant && (
				<Divider
					variant={dividerVariant}
					className={dividerClassName}
				/>
			)}
		</div>
	);
};

export default HeadingWithDivider;
