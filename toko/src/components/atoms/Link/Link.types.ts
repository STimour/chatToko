import type { AnchorHTMLAttributes, ReactNode } from 'react';

export type LinkVariant = 'primary' | 'alerte';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: LinkVariant;
	externalLink?: boolean;
	children?: ReactNode;
}
