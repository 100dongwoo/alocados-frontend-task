import React, { CSSProperties, useContext } from 'react';

import styled from 'styled-components';

import { SemiBoldPoppins15 } from '@/components/common/Label';
import { ThemeContext } from '@/contexts/ThemeProvider';
import { ColorTypes } from '@/styles/theme';

interface TransactionButtonType {
    disable?: boolean;
    onClick: () => void;
    style?: CSSProperties;
}
const TransactionButton = ({
    disable = true,
    onClick,
    style,
}: TransactionButtonType) => {
    const { colors } = useContext(ThemeContext);

    return (
        <Container disable={disable} onClick={onClick} style={style}>
            <SemiBoldPoppins15
                text={'환전'}
                style={{ color: disable ? colors.LIGHTSHADE400 : colors.WHITE }}
            />
        </Container>
    );
};

const Container = styled.button`
    width: 100%;
    background: #5d28f2;
    border-radius: 12px;
    height: 56px;
    font-weight: 600;
    font-size: 15px;
    line-height: 36px;
    background: ${(props: { disable: boolean; theme: ColorTypes }) =>
        props.disable
            ? props.theme.colors.LIGHTSHADE200
            : props.theme.colors.PRIMARY100};
    cursor: ${(props: { disable: boolean }) =>
        props.disable ? 'not-allowed' : 'cursor'};
`;
export default TransactionButton;
