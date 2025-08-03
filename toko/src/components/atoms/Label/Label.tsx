import type { FC } from 'react';
import type { LabelProps } from './Label.types';

const Label: FC<LabelProps> = ({
	htmlFor = '',
	className = '',
	children,
	...props
}) => {
	return (
		<label
			htmlFor={htmlFor}
			className={`font-medium, ${className}`}
			{...props}
		>
			{children}
		</label>
	);
};
export default Label;
