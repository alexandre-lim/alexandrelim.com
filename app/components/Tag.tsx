import clsx from 'clsx';

interface TagProps {
  tagValue: string;
  className: string;
}

function Tag({ tagValue, className }: TagProps) {
  return (
    <span className={clsx('inline-block text-sm border rounded-lg px-3 py-1 mr-2 mb-2', className)}>{tagValue}</span>
  );
}

export { Tag };
