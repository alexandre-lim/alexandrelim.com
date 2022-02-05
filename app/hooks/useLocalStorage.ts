import * as React from 'react';

function useLocalStorage(key: string) {
  const [state, setState] = React.useState<string | null>(null);

  React.useEffect(() => {
    setState(localStorage.getItem(key));
  }, []);

  const setWithLocalStorage = (nextState: string) => {
    localStorage.setItem(key, nextState);
    setState(nextState);
  };

  return [state, setWithLocalStorage] as const;
}

export { useLocalStorage };
