import type { DividerVariant } from "../../atoms/Divider";
import type { MouseEvent } from 'react';

export interface FooterMenuProps {
	//Header container
	footerClassName: string,
	
	//Link+Icon
	hrefIconConversations: string
	imageSrcConversations: string;
	
	hrefSrcParameter: string;
	imageSrcParameter: string;

	btnDisconnect: string;
	imageBtnDisconnect: string;
	
	imageClassName: string;
	width:string,
	height:string,

	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	
	// Optionnal 
	dividerVariant?: DividerVariant;
	linkClassName?: string;
}