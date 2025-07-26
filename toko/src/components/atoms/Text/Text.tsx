import type { FC } from 'react'
import type { TextProps } from './Text.types'
import clsx from 'clsx'

const Text: FC<TextProps> = ({ as = 'p', className = '', children }) => {
    const Tag = as

    return <Tag className={clsx('text-base text-gray-800', className)}>{children}</Tag>
}

export default Text
