import type { FC } from 'react';
import type { ButtonProps } from './Button.types';
import { multipleClassName } from '../../../utils/MultipleClassName';

const variantClasses = {
	primary: 'primary hover:opacity-90',
	secondary: 'blocked',
	alerte: 'alerte',
};

const Button: FC<ButtonProps> = ({
	children,
	className = '',
	variant = 'primary',
	...props
}) => {
	return (
		<button
			className={multipleClassName(
				'px-4 py-2 rounded font-medium transition-colors duration-200 disabled:opacity-50',
				variantClasses[variant],
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
