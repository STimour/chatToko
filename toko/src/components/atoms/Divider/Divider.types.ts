import type { HTMLAttributes } from 'react';

export type BorderVariant = 'horizontal' | 'vertical' | 'standard';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	variant?: BorderVariant;
}
