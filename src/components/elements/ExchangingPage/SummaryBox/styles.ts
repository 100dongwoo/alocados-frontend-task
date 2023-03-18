import styled from 'styled-components';

import { ColorTypes } from '@/styles/theme';

export const Container = styled.div`
    width: 308px;
    padding: 24px;
    height: 100%;
    background: ${(props: { theme: ColorTypes }) =>
        props.theme.colors.LIGHTSHADE000};
`;
export const Line = styled.div`
    background: ${(props: { theme: ColorTypes }) =>
        props.theme.colors.LIGHTSHADE300};
    margin: 16px 0px;
    height: 1px;
    width: 100%;
`;
