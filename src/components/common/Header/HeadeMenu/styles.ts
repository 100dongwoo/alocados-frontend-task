import styled from 'styled-components';

import { ColorTypes } from '@/styles/theme';

export const Container = styled.button`
    margin-left: 24px;
    padding: 0px 16px;
    background: ${(props: { isFocus: boolean; theme: ColorTypes }) =>
        props.isFocus ? props.theme.colors.LIGHTINFO12 : 'transparent'};

    height: 56px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;
