import type { ButtonProps } from '../../atoms/Button';

export interface ButtonFieldProps extends ButtonProps {
	// Layout
	divClassName?: string;
	
	// Bouton
	buttonClassName?: string;
	
	// Image optionnelle
	imageSrc?: string;
	imageClassName?: string;
	
	// Texte optionnel
	textClassName?: string;
	textChildren?: string;
}
