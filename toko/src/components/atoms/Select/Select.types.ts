import type { ChangeEvent, SelectHTMLAttributes } from 'react';

export interface SelectOptions {
	label: string;
	value: string;
	disabled?: boolean;
}

export interface SelectProps
	extends Omit<
		SelectHTMLAttributes<HTMLSelectElement>,
		'onChange' | 'value'
	> {
	options: SelectOptions[];
	value: string;
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
	disabled: boolean;
	className?: string;
}
