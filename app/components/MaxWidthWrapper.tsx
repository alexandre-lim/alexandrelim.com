import * as React from 'react';
import clsx from 'clsx';

// https://stackoverflow.com/a/65865806
interface MaxWidthWrapperProps {
  tag: React.ComponentType | keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
}

function MaxWidthWrapper({ tag: Tag, children, className }: MaxWidthWrapperProps) {
  return <Tag className={clsx('w-full max-w-6xl mx-auto px-8', className)}>{children}</Tag>;
}

export { MaxWidthWrapper };
