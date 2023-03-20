import React, { CSSProperties, useContext } from 'react';

import styled from 'styled-components';

import { SemiBoldPoppins12 } from '@/components/common/Label';
import { ThemeContext } from '@/contexts/ThemeProvider';
import { ColorTypes } from '@/styles/theme';

interface ErrorInputType {
    style?: CSSProperties;
    disable?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    type?: string;
}
const ErrorInput = ({
    disable = false,
    style,
    onChange,
    value,
    type = 'number',
}: ErrorInputType) => {
    return (
        <Container disable={disable} style={style}>
            <SemiBoldPoppins12
                text={'전환수량'}
                style={{ color: 'LIGHTSHADE600', lineHeight: '12px' }}
            />
            <Input
                onChange={(e) => {
                    let _pattern2 = /^\d*[.]\d{11}$/;
                    if (_pattern2.test(e.target.value)) {
                        return false;
                    }
                    onChange(e);
                }}
                value={value}
                type={type}
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key) && event.key !== '.') {
                        event.preventDefault();
                    }
                }}
                onWheelCapture={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.blur();
                }}
            />
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
    height: 56px;
    border: ${(props: { disable: boolean; theme: ColorTypes }) =>
        props.disable ? `1.2px solid #F7254B` : `1.2px solid transparent`};
`;

const Input = styled.input`
    border: none;
    font-weight: 600;
    font-size: 18px;
    color: ${(props: { theme: ColorTypes }) =>
        props.theme.colors.LIGHTSHADE800};
    width: 100%;
    background: transparent;
    height: 18px;
    margin-top: 4px;
`;
export default ErrorInput;
