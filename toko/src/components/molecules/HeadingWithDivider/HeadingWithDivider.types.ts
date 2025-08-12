import type { DividerVariant } from '../../atoms/Divider/Divider.types';

export interface HeadingWithDividerProps {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	text: string;
	dividerVariant?: DividerVariant;
	containerClassName?: string;
	textClassName?: string;
	dividerClassName?: string;
}
