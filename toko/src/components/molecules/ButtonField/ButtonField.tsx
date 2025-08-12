import type { FC } from 'react';
import type { ButtonFieldProps } from './ButtonField.types';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';

const ButtonField: FC<ButtonFieldProps> = ({
	label,
	buttonClassName,
	imageSrc,
	imageClassName,
	textAs,
	textChildren,
	textClassName,
	type,
	onClick,
	...props
}) => {
	return (
		<Button
			type={type}
			className={buttonClassName}
			onClick={onClick}
			{...props}
		>
			<span className="inline-flex items-center gap-2">
				{imageSrc && (
					<Image
						className={imageClassName ? imageClassName : ''}
						src={imageSrc}
					/>
				)}
				{textChildren && (
					<Text
						as={textAs}
						className={textClassName}
						id={`${textAs}-${label}`}
					>
						{textChildren}
					</Text>
				)}
			</span>
		</Button>
	);
};

export default ButtonField;
