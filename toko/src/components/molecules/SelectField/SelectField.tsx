import type { FC } from 'react';
import type { SelectFieldProps } from './SelectField.types';
import Divider from '../../atoms/Divider';
import Label from '../../atoms/Label';
import Select from '../../atoms/Select';
import Text from '../../atoms/Text';

const SelectField: FC<SelectFieldProps> = ({
	label,
	inputName,
	className,
	options,
	divClassName,
	description,
	error,
	value,
	onChange,
	disabled,
	required,
	...props
}) => {
	// ARIA : pointer soit vers l’erreur, soit vers la description
	const descId = error
		? `${inputName}-error`
		: description
			? `${inputName}-desc`
			: undefined;

	return (
		<div className={divClassName}>
			<Divider variant="horizontal" className="h-full" />
			<div>
				<Label htmlFor={inputName}>{label}</Label>

				<Select
					id={inputName}
					name={inputName}
					options={options}
					value={value}
					onChange={onChange}
					disabled={disabled}
					required={required}
					className={error ? 'alerte' : className}
					aria-invalid={!!error || undefined}
					aria-describedby={descId}
					{...props}
				/>

				{error ? (
					<Text
						as="p"
						id={`${inputName}-error`}
						className="text-sm alerte-link-text"
					>
						{error}
					</Text>
				) : description ? (
					<Text
						as="p"
						id={`${inputName}-desc`}
						className="text-sm primary-link-text"
					>
						{description}
					</Text>
				) : null}
			</div>
		</div>
	);
};

export default SelectField;
