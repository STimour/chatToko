import type { ChangeEvent, SelectHTMLAttributes } from 'react';
import type { SelectOptions, SelectProps } from '../../atoms/Select';

export interface SelectFieldProps
	extends SelectHTMLAttributes<HTMLSelectElement> {
	label: string;
	inputName: string;
	options: SelectOptions[];
	className?: string;
	divClassName?: string;
	description?: string;
	error?: string;
	value: SelectProps['value']; // string (ou string[] si on passes en multiple)
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	disabled: boolean;
	required: boolean;
}
