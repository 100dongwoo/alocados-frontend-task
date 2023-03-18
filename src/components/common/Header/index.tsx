import React from 'react';

import RowContainer from '@/components/common/Container/RowContainer';
import HeaderMenu from '@/components/common/Header/HeadeMenu';
import { Container, Logo } from '@/components/common/Header/styles';

const Header = () => {
    const isFocus = true;

    return (
        <Container>
            <Logo src={'assets/common/Logo.png'} alt={'logo'} />
            <RowContainer>
                <HeaderMenu text={'환전하기'} isFocus={isFocus} />
                <HeaderMenu text={'거래내역'} isFocus={!isFocus} />
            </RowContainer>
        </Container>
    );
};

export default Header;
