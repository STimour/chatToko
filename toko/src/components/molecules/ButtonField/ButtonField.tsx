import type { FC } from 'react';
import type { ButtonFieldProps } from './ButtonField.types';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';

const ButtonField: FC<ButtonFieldProps> = ({
	buttonClassName,
	imageSrc,
	imageClassName,
	width,
	height,
	textChildren,
	textClassName,
	type,
	onClick,
	...props
}) => {
	return (
		<Button
			type={type}
			aria-label={textChildren}
			className={buttonClassName}
			onClick={onClick}
			{...props}
		>
			<span className="inline-flex items-center gap-2">
				{imageSrc && (
					<Image
						className={imageClassName ? imageClassName : ''}
						src={imageSrc} width={width} height={height}
					/>
				)}
				{textChildren && (
					<Text
						as="span"
						className={textClassName}
						id={`span-${textChildren.replace(' ', '-')}`}
					>
						{textChildren}
					</Text>
				)}
			</span>
		</Button>
	);
};

export default ButtonField;
