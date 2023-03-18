import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import RowContainer from '@/components/common/Container/RowContainer';
import HeaderMenu from '@/components/common/Header/HeadeMenu';
import { Container, Logo } from '@/components/common/Header/styles';

const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onClick = (URL: 'ExchangeHistory' | '/') => {
        navigate(URL);
    };

    return (
        <Container>
            <Logo src={'assets/common/Logo.png'} alt={'logo'} />
            <RowContainer>
                <HeaderMenu
                    text={'환전하기'}
                    isFocus={pathname === '/'}
                    onClick={() => {
                        onClick('/');
                    }}
                />
                <HeaderMenu
                    text={'거래내역'}
                    isFocus={pathname === '/ExchangeHistory'}
                    onClick={() => {
                        onClick('ExchangeHistory');
                    }}
                />
            </RowContainer>
        </Container>
    );
};

export default Header;
