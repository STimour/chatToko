import type { DividerVariant } from "../../atoms/Divider";

export interface HeaderMenuProps {
	
	//Heading
	headerLabel: string,
	headerLabelLevel: 1 | 2 | 3 | 4 | 5 | 6;
	
	//Icon
	hrefIconDroite: string;
	imageSrcDroite: string;
	
	hrefIconGauche: string
	imageSrcGauche: string;
	
	imageClassName: string;
	width:string,
	height:string,
    
	// Optionnal 
	dividerVariant?: DividerVariant;
	textClassName?: string;
	linkClassName?: string;
	
	//Header container
	headerClassName?: string,
}