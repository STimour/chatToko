import type { TextAreaProps } from '../../atoms/Textarea';

export interface TextareaFieldProps
	extends TextAreaProps {
	label: string;
	inputName: string;
	className?: string;
	divClassName?: string;
	description?: string;
	error?: string;
}
