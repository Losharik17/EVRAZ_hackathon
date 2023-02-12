import {
    FC,
    ReactNode,
    useMemo,
    useState,
} from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
    Theme,
} from 'shared/lib/theme';

const defaultTheme: Theme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'light';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
