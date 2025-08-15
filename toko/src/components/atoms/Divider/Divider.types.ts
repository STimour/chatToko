import type { HTMLAttributes } from 'react';

export type DividerVariant = 'horizontal' | 'vertical' | 'standard';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	variant?: DividerVariant;
}
