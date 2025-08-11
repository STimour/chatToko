import type { FC } from 'react';
import type { DividerProps } from './Divider.types';
import { multipleClassName } from '../../../utils/multipleClassName';

const borderVariant = {
	horizontal: 'border-styled-horizontal',
	vertical: 'border-styled-vertical',
	standard: 'border-standard',
};

const Divider: FC<DividerProps> = ({ className = '', variant, ...props }) => {
	return (
		<div
			className={multipleClassName(
				borderVariant[variant || 'standard'],
				className,
			)}
			{...props}
		></div>
	);
};

export default Divider;
