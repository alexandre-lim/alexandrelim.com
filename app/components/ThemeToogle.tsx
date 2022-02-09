import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { useLocalStorage } from '~/hooks/useLocalStorage';

const enum Theme {
  dark = 'dark',
  light = 'light',
}

function ThemeToogle() {
  const LOCAL_STORAGE_KEY_THEME = 'theme';
  const [theme, setTheme] = useLocalStorage(LOCAL_STORAGE_KEY_THEME);

  React.useEffect(() => {
    if (!(LOCAL_STORAGE_KEY_THEME in localStorage)) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(Theme.dark);
      } else {
        setTheme(Theme.light);
      }
    }
  }, []);

  React.useEffect(() => {
    if (theme === Theme.dark) {
      document.documentElement.classList.add(Theme.dark);
    } else {
      document.documentElement.classList.remove(Theme.dark);
    }
  }, [theme]);

  return theme === Theme.dark ? (
    <button aria-label="Activate light mode" title="Activate light mode" onClick={() => setTheme(Theme.light)}>
      <MoonIcon height={20} width={20} />
    </button>
  ) : (
    <button aria-label="Activate dark mode" title="Activate dark mode" onClick={() => setTheme(Theme.dark)}>
      <SunIcon height={20} width={20} />
    </button>
  );
}

export { ThemeToogle };
