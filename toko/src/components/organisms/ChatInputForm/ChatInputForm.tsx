import type { FC } from 'react';
import type { ChatInputFormProps } from './ChatInputForm.types';
import TextareaField from '../../molecules/TextareaField';
import ButtonField from '../../molecules/ButtonField';
import { multipleClassName } from '../../../utils/multipleClassName';

const ChatInputForm: FC<ChatInputFormProps> = ({
	formClassName,
	textareaName,
	textareaValue,
	textareaPlaceholder = "Tapez votre message...",
	textareaClassName,
	onTextareaChange,
	onSubmit,
	buttonClassName,
	buttonDisabled = false,
	maxLength = 500,
	rows = 3,
}) => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		
		// Vérifie que le message n'est pas vide
		const trimmedMessage = textareaValue.trim();
		if (!trimmedMessage) return;
		
		// Envoie le message
		onSubmit(trimmedMessage);
	};

	const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		onTextareaChange(e.target.value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		// Envoyer avec Ctrl+Enter ou Cmd+Enter
		if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
			e.preventDefault();
			const trimmedMessage = textareaValue.trim();
			if (trimmedMessage) {
				onSubmit(trimmedMessage);
			}
		}
	};

	const isSubmitDisabled = !textareaValue.trim() || buttonDisabled;

	return (
		<form 
			onSubmit={handleSubmit}
			className={multipleClassName(
				'flex items-end gap-3 p-4 bg-opacity-80',
				formClassName
			)}
		>
			<div className="flex-1">
				<TextareaField
					label="" 
					inputName={textareaName}
					value={textareaValue}
					onChange={handleTextareaChange}
					onKeyDown={handleKeyDown}
					placeholder={textareaPlaceholder}
					className={multipleClassName(
						'resize-none border-standard p-3 rounded-lg w-full',
						'focus:outline-none focus:ring-2 focus:ring-primary',
						textareaClassName
					)}
					maxLength={maxLength}
					rows={rows}
				/>
			</div>
			
			<ButtonField
				type="submit"
				disabled={isSubmitDisabled}
				imageSrc="/plane.svg"
				imageClassName="w-5 h-5"
				width="40"
				height="40"
				buttonClassName={multipleClassName(
					'p-3 rounded-lg transition-colors',
					isSubmitDisabled 
						? 'opacity-50 cursor-not-allowed' 
						: 'hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary',
					buttonClassName
				)}
				aria-label="Envoyer le message"
			/>
		</form>
	);
};

export default ChatInputForm;
