import type { CheckboxProps } from '../../atoms/Checkbox';
import type { BorderVariant } from '../../atoms/Divider';

export interface CheckboxFieldProps extends CheckboxProps {
	checkBoxName: string;
	checkBoxClassName?: string;
	divClassName?: string;
	dividerClassName?: string;
	label?: string;
	labelClassName?: string;
	dividerVariant?: BorderVariant;
	description?: string;
}
