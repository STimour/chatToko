import type { FC } from 'react';
import type { CheckboxProps } from './Checkbox.type';

const Checkbox: FC<CheckboxProps> = ({ className = '', ...props }) => {
	return (
		<input
			type="checkbox"
			className={`className="w-4 h-4 rounded focus:ring focus:ring-indigo-300 ${className}"
        `}
			{...props}
		/>
	);
};
export default Checkbox;
