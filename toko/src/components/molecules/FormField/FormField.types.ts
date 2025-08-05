import type { InputHTMLAttributes } from 'react';

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	inputName: string;
	divClassName: string;
	className?: string;
	description?: string;
	error?: string;
}
