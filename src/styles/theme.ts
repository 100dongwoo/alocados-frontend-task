import { DefaultTheme } from 'styled-components';

const GRAYColor = {
    GRAY0: '#F8F8F8',
    GRAY02: '#F2F2F2',
    GRAY03: '#C8C8C8',
    GRAY04: '#B4B4B4',
    GRAY05: '#7A7A7A',
};
const BLACK = '#222222';
const WHITE = '#FFFFFF';

const LIGHT = {
    LIGHTSHADE000: '#FAFBFC',
    LIGHTSHADE100: '#F4F5F8',
    LIGHTSHADE200: '#E0E2E8',
    LIGHTSHADE400: '#A9B0C1',
    LIGHTSHADE600: '#546182',
    LIGHTSHADE700: '#4C5B7A',
    LIGHTSHADE900: '#2A3249',

    LIGHTINFO12: 'rgba(55, 86, 228, 0.12)',
    LIGHTINFOFONT: '#3756E4',

    LIGHTERROR100: '#F7254B',
};

const PrimaryColor = {
    PRIMARY100: '#5D28F2',
};

export const colors: { [index: string]: any } = {
    ...GRAYColor,
    ...PrimaryColor,
    ...LIGHT,
    WHITE,
    BLACK,
};

export type ColorTypes = typeof colors;

export const theme: DefaultTheme = {
    colors,
};
