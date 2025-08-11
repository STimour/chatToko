import type { ChangeEvent, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
