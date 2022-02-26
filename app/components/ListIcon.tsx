import { TriangleRightIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

interface ListIconProps {
  className?: string;
}

function ListIcon({ className }: ListIconProps) {
  return (
    <TriangleRightIcon
      className={clsx('text-gray-800 dark:text-slate-50 text-opacity-80 min-w-[14px] flex-none', className)}
      height={24}
      width={24}
    />
  );
}

export { ListIcon };
