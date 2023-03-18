import React, { useContext } from 'react';

import Touchable from '@/components/common/Button/Touchable';
import { Container } from '@/components/common/Header/HeadeMenu/styles';
import { SemiBoldPoppins15 } from '@/components/common/Label';
import { ThemeContext } from '@/contexts/ThemeProvider';

interface HeaderMenuType {
    text: string;
    isFocus: boolean;
    onClick: () => void;
}

const HeaderMenu = ({ text, isFocus, onClick }: HeaderMenuType) => {
    const { colors } = useContext(ThemeContext);

    return (
        <Touchable onClick={onClick}>
            <Container isFocus={isFocus}>
                <SemiBoldPoppins15
                    text={text}
                    style={{
                        color: isFocus
                            ? colors.PRIMARY100
                            : colors.LIGHTSHADE700,
                    }}
                />
            </Container>
        </Touchable>
    );
};

export default HeaderMenu;
