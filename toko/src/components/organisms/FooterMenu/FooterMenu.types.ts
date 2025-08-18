import type { DividerVariant } from '../../atoms/Divider';
import type { MouseEvent } from 'react';

export interface FooterMenuProps {
    // Container
    footerClassName: string;
    
    // Button de déconnexion
    btnDisconnect: string;
    imageBtnDisconnect: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    
    // Styling des éléments
    width: string;
    height: string;
    imageClassName: string;
    linkClassName?: string;
    
    // Divider optionnel
    dividerVariant?: DividerVariant;
}
