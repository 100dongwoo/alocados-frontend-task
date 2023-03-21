import React, { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Touchable from '@/components/common/Button/Touchable';
import RowContainer from '@/components/common/Container/RowContainer';
import HeaderMenu from '@/components/common/Header/HeadeMenu';
import { Container, Logo } from '@/components/common/Header/styles';
import { BoldPoppins14 } from '@/components/common/Label';
import CoinStore from '@/zustand/store';

const Header = () => {
    const { reset } = CoinStore();

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onClick = (URL: 'ExchangeHistory' | '/') => {
        navigate(URL);
    };

    const onClickReset = useCallback(() => {
        if (window.confirm('초기화 진행시 거래내역 등 코인이 초기화됩니다')) {
            alert('초기화완료.');
            reset();
        } else {
            alert('취소합니다.');
        }
    }, []);

    return (
        <Container>
            <Logo src={'assets/common/Logo.png'} alt={'logo'} />
            <RowContainer>
                <Touchable onClick={onClickReset}>
                    <BoldPoppins14 text={'초기화'} />
                </Touchable>
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
