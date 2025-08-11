import type { FC } from 'react';
import type { TextareaFieldProps } from './TextareaField.types';
import Divider from '../../atoms/Divider';
import Label from '../../atoms/Label';
import Text from '../../atoms/Text';
import Textarea from '../../atoms/Textarea';
const TextareaField: FC<TextareaFieldProps> = ({
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
				<Textarea
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

export default TextareaField;
