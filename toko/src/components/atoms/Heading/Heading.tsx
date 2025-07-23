import type { FC, JSX } from "react";
import type { HeadingProps } from "./Heading.types";
import clsx from "clsx";

const variants = {
  1: 'text-6xl',
  2: 'text-5xl',
  3: 'text-4xl',
  4: 'text-3xl',
  5: 'text-2xl',
  6: 'text-xl',
}

const Heading: FC<HeadingProps> = ({ level = 1, children, className = '' }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    const policeSize = variants[level] || variants[1];

    return (
        <Tag className={clsx(policeSize, className)}>
          {children}
        </Tag>
    );
};
export default Heading;