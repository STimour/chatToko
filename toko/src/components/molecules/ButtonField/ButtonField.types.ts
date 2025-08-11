import type { ButtonProps } from '../../atoms/Button';
import type { ImageProps } from '../../atoms/Image';
import type { TextProps } from '../../atoms/Text';

export interface ButtonFieldProps extends ButtonProps {
	divClassName?: string;
	label?: string;
	buttonClassName: string;
	image?: ImageProps;
	text?: TextProps;
}
