import type { SelectHTMLAttributes } from 'react';

export interface SelectOptions {
	label: string;
	value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	className?: string;
	options: SelectOptions[];
}
