import type { ChangeEvent, InputHTMLAttributes } from 'react';

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	inputName: string;
	divClassName: string;
	className?: string;
	description?: string;
	error?: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
