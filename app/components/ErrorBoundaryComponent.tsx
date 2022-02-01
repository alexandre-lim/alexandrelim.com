import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

function ErrorBoundaryComponent({ errorMessage }: { errorMessage: string }) {
  return (
    <div className="flex flex-col gap-16 max-w-2xl mx-auto">
      <h2 className="self-center leading-tight text-3xl sm:text-4xl md:text-5xl text-black dark:text-white font-recursive-casual font-recursive-bold">
        There was an error
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center p-12 bg-blue-200 dark:bg-blue-500 rounded-md">
        <ExclamationTriangleIcon height={32} width={32} className="flex-none"></ExclamationTriangleIcon>
        <p className="text-center sm:text-left">
          Sorry, something unexpected happened. <br />
          Refresh the page or try again later.
        </p>
      </div>
      {process.env.NODE_ENV === 'development' ? (
        <div className="flex gap-4 justify-center p-12 bg-gray-200 dark:bg-gray-500 rounded-md">{errorMessage}</div>
      ) : null}
    </div>
  );
}

export { ErrorBoundaryComponent };
