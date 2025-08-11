import type { FC } from 'react';
import type { ChatMesssageProps } from './ChatMessage.types';
import Text from '../../atoms/Text';
import { multipleClassName } from '../../../utils/multipleClassName';
const ChatMessage: FC<ChatMesssageProps> = ({
	divMessageClassName,
	currentUserId,
	asInfoDivers,
	userName,
	userId,
	infoDiversNameStyle,
	asMessage,
	message,
	messageClassName,
	heureEnvoi,
	...props
}) => {
	const isSent = currentUserId === userId;

	// Classes dynamiques selon envoyé/reçu
	const alignClass = isSent ? 'justify-end' : 'justify-start';
	const bubbleColor = isSent
		? 'bg-[var(--color-primary)] text-[var(--color-bg)]'
		: 'bg-[var(--color-bg)] text-[var(--color-text)]';
	return (
		<div className={multipleClassName('flex', alignClass)} {...props}>
			<div
				className={multipleClassName(
					'max-w-xs md:max-w-md px-4 py-2 rounded-xl border border-[var(--color-border)] shadow-sm',
					bubbleColor,
				)}
			>
				<Text
					as={asInfoDivers}
					className={multipleClassName(
						'block text-xs mt-1 opacity-80 text-left',
						infoDiversNameStyle,
					)}
				>
					{userName}
				</Text>
				<Text
					as={asMessage}
					className={multipleClassName(
						'text-sm whitespace-pre-wrap break-words',
						messageClassName,
					)}
				>
					{message}
				</Text>
				<Text
					as={asInfoDivers}
					className={multipleClassName(
						'block text-xs mt-1 opacity-80 text-right',
						infoDiversNameStyle,
					)}
				>
					{heureEnvoi.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
				</Text>
			</div>
		</div>
	);
};

export default ChatMessage;
