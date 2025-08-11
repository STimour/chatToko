import type { ChangeEvent, TextareaHTMLAttributes } from 'react';

export interface TextAreaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
