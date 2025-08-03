import type { FC } from 'react';
import type { InputProps } from './Input.types';

const Input: FC<InputProps> = ({ className = '', ...props }) => {
	return <input className={`rounded px-2 py-1 ${className}`} {...props} />;
};
export default Input;
