import type { ChangeEvent } from 'react';
import type { CheckboxProps } from '../../atoms/Checkbox';
import type { DividerVariant } from '../../atoms/Divider';

export interface CheckboxFieldProps extends CheckboxProps {
	checkBoxName: string;

	// contrôle
	checked: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;

	// UI
	label: string;
	description?: string;
	error?: string;

	// Classes optionnelles
	divClassName?: string;
	labelClassName?: string;
	checkBoxClassName?: string;
	dividerClassName?: string;
	dividerVariant?: DividerVariant;

	// Optionnels utiles
	disabled?: boolean;
	required?: boolean;
}
