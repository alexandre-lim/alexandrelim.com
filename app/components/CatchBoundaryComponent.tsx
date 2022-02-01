import { useCatch } from 'remix';
import { InfoCircledIcon } from '@radix-ui/react-icons';

function CatchBoundaryComponent() {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = 'Oops! Looks like you tried to visit a page that you do not have access to.';
      break;
    case 404:
      message = 'Oops! Looks like you tried to visit a page that does not exist.';
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <div className="flex flex-col gap-16 max-w-2xl mx-auto">
      <h2 className="self-center leading-tight text-3xl sm:text-4xl md:text-5xl text-black dark:text-white font-recursive-casual font-recursive-bold">
        {caught.status}: {caught.statusText}
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center p-12 bg-blue-200 dark:bg-blue-500 rounded-md">
        <InfoCircledIcon height={32} width={32} className="flex-none"></InfoCircledIcon>
        <p className="text-center sm:text-left">{message}</p>
      </div>
      {process.env.NODE_ENV === 'development' ? (
        <div className="flex gap-4 justify-center p-12 bg-gray-200 dark:bg-gray-500 rounded-md">
          {JSON.stringify(caught, null, 2)}
        </div>
      ) : null}
    </div>
  );
}

export { CatchBoundaryComponent };
