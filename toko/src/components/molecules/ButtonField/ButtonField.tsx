import type { FC } from 'react';
import type { ButtonFieldProps } from './ButtonField.types';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';

const ButtonField: FC<ButtonFieldProps> = ({
	divClassName,
	label,
	buttonClassName,
	image,
	text,
	...props
}) => {
	return (
		<div className={divClassName}>
			<Button className={buttonClassName} {...props}>
				<span className="inline-flex items-center gap-2">
					{image?.src && (
						<Image className={image.className} src={image.src} />
					)}
					{text?.children && (
						<Text
							as={text.as}
							className={text.className}
							id={`${text.as}-${label}`}
						>
							{text.children}
						</Text>
					)}
				</span>
			</Button>
		</div>
	);
};

export default ButtonField;
