import React, { useContext, useMemo, useRef } from 'react';

import styled from 'styled-components';

import Touchable from '@/components/common/Button/Touchable';
import RowContainer from '@/components/common/Container/RowContainer';
import { BoldPoppins14, NormalPoppins14 } from '@/components/common/Label';
import { Coins } from '@/constants/Coins';
import { ThemeContext } from '@/contexts/ThemeProvider';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import useToggle from '@/hooks/useToggle';
import CoinStore from '@/zustand/store';

type coinType = null | 'Solana' | 'Ethereum' | 'BnB';

interface DisableDropDownType {
    onClick: (data: { name: coinType; image: string }) => void;
    value: null | 'Solana' | 'Ethereum' | 'BnB';
    inputValue?: string;
    anotherValue: null | 'Solana' | 'Ethereum' | 'BnB';
}

export const DisableDropDown = ({
    onClick,
    value,
    inputValue,
    anotherValue,
}: DisableDropDownType) => {
    const COINTYPE: { [key: string]: any } = {
        Solana: 'SOLANA',
        Ethereum: 'ETH',
        BnB: 'BNB',
    };
    const [show, toggle, setShow] = useToggle();
    const { colors } = useContext(ThemeContext);
    const coins: { [index: string]: any } = CoinStore();

    const ref = useRef(null);

    const RowStyle = useMemo(
        () => ({
            background: colors.LIGHTSHADE000,
            height: 56,
            padding: '0px 13px',
            borderRadius: 12,
        }),
        []
    );

    useOnClickOutside(ref, () => {
        setShow(false);
    });

    return (
        <Container ref={ref}>
            <Touchable onClick={toggle}>
                <RowContainer style={RowStyle}>
                    <>
                        {value && (
                            <CoinImage src={Coins[value].image} alt={'coin'} />
                        )}
                    </>
                    <NormalPoppins14
                        text={value ? Coins[value].name : ''}
                        style={{
                            marginLeft: 7,
                            color: colors.LIGHTSHADE900,
                            width: 68,
                        }}
                    />
                    <SVG
                        src={`assets/icons/ChevronDown.svg`}
                        alt={'ChevronDown'}
                        show={show}
                    />
                </RowContainer>
            </Touchable>
            <ListContainer>
                <div>
                    {show &&
                        Object.values(Coins)?.map(
                            (data: any, index: number) => {
                                const disable =
                                    (inputValue &&
                                        coins[COINTYPE[data.name]] <
                                            inputValue) ||
                                    anotherValue === data.name;
                                return (
                                    <List
                                        key={index}
                                        onClick={() => {
                                            if (!disable) {
                                                onClick(data);
                                            }
                                            toggle();
                                        }}
                                        disable={disable}
                                    >
                                        <NormalPoppins14
                                            text={data.name}
                                            style={{
                                                marginRight: 12,
                                            }}
                                            color='BLACK'
                                        />
                                        {disable && (
                                            <BoldPoppins14 text={'X'} />
                                        )}
                                    </List>
                                );
                            }
                        )}
                </div>
            </ListContainer>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    min-width: 150px;
`;
const ListContainer = styled.div`
    border-radius: 6px;
    position: absolute;
    padding-left: 1px;
    background: #ffffff;
    width: 100%;
    z-index: 9999999;
`;
const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 42px;
    padding-right: 18px;
    padding-left: 18px;
    border-bottom: 0.5px solid #cccccc;
    &:hover {
        opacity: ${(props: { disable: boolean }) => (props.disable ? 1 : 0.5)};
    }
    background: ${(props: { disable: boolean }) =>
        props.disable ? 'rgba(186,13,13,0.18)' : '#ffffff'};
    cursor: ${(props: { disable: boolean }) =>
        props.disable ? 'not-allowed' : 'pointer'};
`;
const CoinImage = styled.img`
    width: 24px;
    height: 24px;
`;
const SVG = styled.img`
    transform: ${(props: { show: boolean }) =>
        props.show ? 'rotate( 180deg )' : 'rotate( 540deg )'};
    transition: 0.5s;
`;
