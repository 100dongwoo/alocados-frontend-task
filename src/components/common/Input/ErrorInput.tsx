import React, { CSSProperties, useContext } from 'react';

import styled from 'styled-components';

import { SemiBoldPoppins12 } from '@/components/common/Label';
import { ThemeContext } from '@/contexts/ThemeProvider';
import { ColorTypes } from '@/styles/theme';

interface ErrorInputType {
    style?: CSSProperties;
    disable?: boolean;
}
const ErrorInput = ({ disable = false, style }: ErrorInputType) => {
    const { colors } = useContext(ThemeContext);

    return (
        <Container disable={disable} style={style}>
            <SemiBoldPoppins12
                text={'전환수량'}
                style={{ color: 'LIGHTSHADE600' }}
            />
            <Input />
        </Container>
    );
};
const Container = styled.div`
    background: ${(props: { theme: ColorTypes }) =>
        props.theme.colors.LIGHTSHADE000};
    border-radius: 12px;
    align-items: center;
    width: 100%;
    padding: 10px 14px;
    border: ${(props: { disable: boolean; theme: ColorTypes }) =>
        props.disable ? `1.2px solid #F7254B` : `1.2px solid transparent`};
`;

const Input = styled.input`
    margin-top: 4px;
    border: none;
    font-weight: 600;
    font-size: 18px;
    color: ${(props: { theme: ColorTypes }) =>
        props.theme.colors.LIGHTSHADE800};
    width: 100%;
    background: transparent;
`;
export default ErrorInput;
