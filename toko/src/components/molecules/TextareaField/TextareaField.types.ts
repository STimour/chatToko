import type { TextareaHTMLAttributes } from 'react';

export interface TextareaFieldProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	inputName: string;
	className?: string;
	divClassName?: string;
	description?: string;
	error?: string;
}
