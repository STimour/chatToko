import type { TextareaHTMLAttributes } from 'react';

export interface TextAreaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className: string;
}
