import type { FC } from 'react'
import type { SelectProps } from './Select.types'

const Select: FC<SelectProps> = ({ className = '', options, ...props }) => {
    return (
        <select
            className={`w-full px-3 py-2 rounded border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
            {...props}
        >
            {options.map(({ label, value }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    )
}
export default Select
