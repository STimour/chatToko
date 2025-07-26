import type { FC } from 'react'
import type { TextAreaProps } from './Textarea.types'

const Textarea: FC<TextAreaProps> = ({ className = '', ...props }) => {
    return <textarea className={`rounded px-2 py-1 ${className}`} {...props} />
}
export default Textarea
