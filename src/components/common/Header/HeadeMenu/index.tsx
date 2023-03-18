import React, { useContext } from 'react';

import { Container } from '@/components/common/Header/HeadeMenu/styles';
import { SemiBoldPoppins15 } from '@/components/common/Label';
import { ThemeContext } from '@/contexts/ThemeProvider';
import CoinStore from '@/zustand/store';

interface HeaderMenuType {
    text: string;
    isFocus: boolean;
}

const HeaderMenu = ({ text, isFocus }: HeaderMenuType) => {
    const { colors } = useContext(ThemeContext);
    const id = CoinStore();

    return (
        <Container isFocus={isFocus}>
            <SemiBoldPoppins15
                text={text}
                style={{
                    color: isFocus ? colors.PRIMARY100 : colors.LIGHTSHADE700,
                }}
            />
        </Container>
    );
};

export default HeaderMenu;
