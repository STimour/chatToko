import type { FC } from 'react';
import type { CheckboxProps } from './Checkbox.type';

const Checkbox: FC<CheckboxProps> = ({
	checked,
	onChange,
	className,
	...props
}) => {
	return (
		<input
			type="checkbox"
			checked={checked}
			onChange={onChange}
			className={`className="w-4 h-4 rounded focus:ring focus:ring-indigo-300 ${className}"
        `}
			{...props}
		/>
	);
};
export default Checkbox;
