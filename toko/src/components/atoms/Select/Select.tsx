import type { FC } from 'react';
import type { SelectProps } from './Select.types';
import { multipleClassName } from '../../../utils/multipleClassName';

const Select: FC<SelectProps> = ({
	className,
	value,
	onChange,
	disabled,
	options,
	...props
}) => {
	return (
		<select
			className={multipleClassName(
				'w-full border-standard p-2 rounded-md',
				className,
			)}
			{...props}
		>
			{options.map((opt) => (
				<option
					key={opt.value}
					value={opt.value}
					disabled={opt.disabled}
				>
					{opt.label}
				</option>
			))}
		</select>
	);
};
export default Select;
