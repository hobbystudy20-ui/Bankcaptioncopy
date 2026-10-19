import { useEffect, useState } from 'react';
import { ThemePicker } from '@/ThemePicker';
import { CaptionBank } from '@/CaptionBank';
import { getTheme, DEFAULT_THEME_ID, type Theme } from '@/themes';

const STORAGE_KEY = 'caption-bank-theme';

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? getTheme(saved) : getTheme(DEFAULT_THEME_ID);
  });
  const [picking, setPicking] = useState<boolean>(() => {
    return !localStorage.getItem(STORAGE_KEY);
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme.id);
  }, [theme]);

  const handleSelect = (t: Theme) => {
    setTheme(t);
    setPicking(false);
  };

  if (picking) {
    return <ThemePicker onSelect={handleSelect} />;
  }

  return <CaptionBank theme={theme} onChangeTheme={() => setPicking(true)} />;
}

export default App;
