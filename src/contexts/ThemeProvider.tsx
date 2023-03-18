import React from 'react';

import { colors } from '@/styles/theme';

export const ThemeContext = React.createContext<any>(null);

function ThemeProviderSheet({ children }: any) {
    const theme = {
        colors,
    };
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
}
export default ThemeProviderSheet;
