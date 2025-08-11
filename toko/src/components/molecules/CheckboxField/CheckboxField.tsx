import type { FC } from 'react';
import type { CheckboxFieldProps } from './CheckboxField.types';
import Text from '../../atoms/Text';
import Divider from '../../atoms/Divider';
import Label from '../../atoms/Label';
import { multipleClassName } from '../../../utils/multipleClassName';
import Checkbox from '../../atoms/Checkbox';

const CheckboxField: FC<CheckboxFieldProps> = ({
	checkBoxName,
	checkBoxClassName,
	dividerClassName,
	dividerVariant,
	divClassName,
	label,
	labelClassName,
	error,
	description,
	...props
}) => {
	return (
		<div className={divClassName}>
			{dividerVariant && (
				<Divider
					variant={dividerVariant}
					className={multipleClassName('h-full', dividerClassName)}
				/>
			)}
			<div>
				<Label htmlFor={checkBoxName} className={labelClassName}>
					{label}
				</Label>
				<Checkbox
					id={checkBoxName}
					name={checkBoxName}
					aria-invalid={!!error || undefined} // ⚖️ attribut ARIA uniquement si vrai
					aria-describedby={checkBoxName}
					className={multipleClassName(
						error ? 'alerte' : '',
						checkBoxClassName,
					)}
					{...props}
				/>
				{/* 💬 Texte sous le champ */}
				{error ? (
					<Text
						as="p"
						id={`${checkBoxName}-error`}
						className="text-sm alerte-link-text"
					>
						{error}
					</Text>
				) : description ? (
					<Text
						as="p"
						id={`${checkBoxName}-desc`}
						className="text-sm primary-link-text"
					>
						{description}
					</Text>
				) : null}
			</div>
		</div>
	);
};

export default CheckboxField;
