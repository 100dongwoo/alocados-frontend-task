import React from 'react';

import { colors, ColorTypes } from '@/styles/theme';

type ThemeContextType = {
    colors: ColorTypes;
};
const defaultValue: ThemeContextType = {
    colors,
};

export const ThemeContext = React.createContext(defaultValue);

function ThemeProviderSheet({
    children,
}: {
    children: JSX.Element[] | JSX.Element;
}) {
    const theme = {
        colors,
    };
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
}
export default ThemeProviderSheet;
