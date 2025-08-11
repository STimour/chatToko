import type { FC } from 'react';
import type { FormFieldProps } from './FormField.types';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import Divider from '../../atoms/Divider';
import Text from '../../atoms/Text';
const FormField: FC<FormFieldProps> = ({
	label,
	inputName,
	className,
	divClassName,
	description,
	error,
	...props
}) => {
	return (
		<div className={divClassName}>
			<Divider variant="horizontal" className="h-full" />
			<div>
				<Label htmlFor={inputName}>{label}</Label>
				<Input
					id={inputName}
					name={inputName}
					className={`border-standard p-2 rounded-md ${
						error ? 'alerte' : ''
					}`}
					aria-invalid={!!error}
					aria-describedby={
						description || error ? `${inputName}-desc` : undefined
					}
					{...props}
				/>
				{/* 💬 Texte sous le champ */}
				{error ? (
					<Text
						as="p"
						id={`${inputName}-desc`}
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

export default FormField;
