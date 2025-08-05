import type { FC } from 'react';
import type { LinkProps } from './Link.types';
import { multipleClassName } from '../../../utils/MultipleClassName';

const variantClasses = {
	primary: 'no-underline primary-link-text',
	alerte: 'alerte-link-text',
};

const Link: FC<LinkProps> = ({
	variant = 'primary',
	externalLink = false,
	children,
	className = '',
	target = '',
	rel = '',
	...props
}) => {
	return (
		<a
			className={multipleClassName(variantClasses[variant], className)}
			target={externalLink ? '_blank' : target}
			{...props}
			rel={externalLink ? 'noopener noreferrer' : rel}
		>
			{children}
		</a>
	);
};

export default Link;
