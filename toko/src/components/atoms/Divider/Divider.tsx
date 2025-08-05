import type { FC } from 'react';
import type { DividerProps } from './Divider.types';
import { multipleClassName } from '../../../utils/MultipleClassName';

const borderVariant = {
	horizontal: 'border-styled-horizontal',
	vertical: 'border-styled-vertical',
	standard: 'border-standard',
};

const Divider: FC<DividerProps> = ({
	className = '',
	variant = 'standard',
	...props
}) => {
	return (
		<div
			className={multipleClassName(borderVariant[variant], className)}
			{...props}
		></div>
	);
};

export default Divider;
