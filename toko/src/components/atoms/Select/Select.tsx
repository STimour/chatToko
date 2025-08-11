import type { FC } from 'react';
import type { SelectProps } from './Select.types';
import { multipleClassName } from '../../../utils/multipleClassName';

const Select: FC<SelectProps> = ({ className = '', options, ...props }) => {
	return (
		<select
			className={multipleClassName(
				'w-full border-standard p-2 rounded-md',
				className,
			)}
			{...props}
		>
			{options.map(({ label, value }) => (
				<option key={value} value={value}>
					{label}
				</option>
			))}
		</select>
	);
};
export default Select;
