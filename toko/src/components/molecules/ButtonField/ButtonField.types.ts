import type { ButtonProps } from '../../atoms/Button';

export interface ButtonFieldProps extends ButtonProps {
	textAs: 'p';
	label?: string;
	buttonClassName?: string;
	imageSrc?: string;
	imageClassName?: string;
	textClassName?: string;
	textChildren?: string;
}
