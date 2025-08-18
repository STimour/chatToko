export interface ChatInputFormProps {
	// Container
	formClassName?: string;
	
	// Textarea
	textareaName: string;
	textareaValue: string;
	textareaPlaceholder?: string;
	textareaClassName?: string;
	onTextareaChange: (value: string) => void;
	
	// Button
	onSubmit: (message: string) => void;
	buttonClassName?: string;
	buttonDisabled?: boolean;
	
	// Optional
	maxLength?: number;
	rows?: number;
}
