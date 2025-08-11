import type { HTMLAttributes } from 'react';

export interface ChatMesssageProps extends HTMLAttributes<HTMLDivElement> {
	divMessageClassName: string;
	userName: string;
	currentUserId: string;
	userId: string;
	infoDiversNameStyle: string;
	message: string;
	asMessage: 'p';
	asInfoDivers: 'span';
	heureEnvoi: Date;
	messageClassName?: string;
}
