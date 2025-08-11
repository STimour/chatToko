import type { SelectHTMLAttributes } from 'react';
import type { SelectOptions } from '../../atoms/Select';

export interface SelectFieldProps
	extends SelectHTMLAttributes<HTMLSelectElement> {
	label: string;
	inputName: string;
	options: SelectOptions[];
	className?: string;
	divClassName?: string;
	description?: string;
	error?: string;
}
