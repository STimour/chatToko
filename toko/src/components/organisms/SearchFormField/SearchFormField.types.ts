import type { ChangeEvent, MouseEvent } from "react";

export interface SearchFormFieldProps {
    // Container
    divClassName?: string;
    
    // Input
    inputClassName?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    
    // Button
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    labelButton?: string;
    buttonClassName?: string;
    
    width: string;
	height: string;
    // Image optionnelle
    imageSrc?: string;
    imageClassName?: string;
    
    // Texte optionnel
    textClassName?: string;
    textChildren?: string;
}