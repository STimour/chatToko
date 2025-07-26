import type { SelectHTMLAttributes } from 'react'

export interface SelectOption {
    label: string
    value: string
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    className: string
    options: SelectOption[]
}
