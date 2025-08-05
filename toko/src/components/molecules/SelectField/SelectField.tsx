import type { FC } from "react";
import type { SelectFieldProps } from "./SelectField.types";
import Divider from "../../atoms/Divider";
import Label from "../../atoms/Label";
import Select from "../../atoms/Select";
import Text from "../../atoms/Text";
const SelectField: FC<SelectFieldProps> = ({
   	label,
	inputName,
	className,
	options,
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
				<Select
  id={inputName}
  name={inputName}
  options={options}
  className={error ? 'alerte' : className} // ⬅️ ça marche proprement maintenant
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
}

export default SelectField