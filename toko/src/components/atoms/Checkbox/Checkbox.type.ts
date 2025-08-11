import type { ChangeEvent, InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	error?: string;
	checked: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
