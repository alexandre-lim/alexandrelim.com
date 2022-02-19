import { format } from 'date-fns';

interface LastUpdatedProps {
  titleTag: React.ComponentType | keyof JSX.IntrinsicElements;
  edited: string;
}

function LastUpdated({ titleTag: TitleTag, edited }: LastUpdatedProps) {
  const lastEdited = format(new Date(edited), 'PPP');
  return (
    <div className="flex flex-col mt-8">
      <TitleTag className="text-gray-500 dark:text-gray-400 font-recursive-semi-casual">Last Updated</TitleTag>
      <p className="text-xl font-recursive-semi-bold">{lastEdited}</p>
    </div>
  );
}

export { LastUpdated };
