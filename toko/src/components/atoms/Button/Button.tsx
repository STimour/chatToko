import type { FC } from 'react'
import clsx from 'clsx'
import type { ButtonProps } from './Button.types'

const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
}

const Button: FC<ButtonProps> = ({ children, className = '', variant = 'primary', ...rest }) => {
    return (
        <button
            className={clsx(
                'px-4 py-2 rounded font-medium transition-colors duration-200 disabled:opacity-50',
                variantClasses[variant],
                className,
            )}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
