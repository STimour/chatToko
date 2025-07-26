import type { FC } from 'react'
import type { SpinnerProps } from './Spinner.types'

const Spinner: FC<SpinnerProps> = ({ size = 24, className = '', ...props }) => {
    return (
        <div
            className={`spinner animate-spin border-2 border-t-transparent border-gray-500 rounded-full ${className}`}
            style={{ width: size, height: size }}
            {...props}
        />
    )
}

export default Spinner
