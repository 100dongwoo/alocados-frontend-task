import React, { useContext, useMemo } from 'react';

import styled from 'styled-components';

import Touchable from '@/components/common/Button/Touchable';
import RowContainer from '@/components/common/Container/RowContainer';
import { NormalPoppins14 } from '@/components/common/Label';
import { Coins } from '@/constants/Coins';
import { ThemeContext } from '@/contexts/ThemeProvider';
import useToggle from '@/hooks/useToggle';

interface DisableDropDownType {
    onClick: (data: any) => void;
    value: null | 'Solana' | 'Ethereum' | 'BnB';
}

export const DisableDropDown = ({ onClick, value }: DisableDropDownType) => {
    const [show, toggle, setShow] = useToggle();
    const { colors } = useContext(ThemeContext);

    const RowStyle = useMemo(
        () => ({
            background: colors.LIGHTSHADE000,
            height: 56,
            padding: '0px 13px',
            borderRadius: 12,
        }),
        []
    );

    return (
        <Container>
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
                                return (
                                    <List
                                        key={index}
                                        onClick={() => {
                                            onClick(data);
                                            toggle();
                                        }}
                                    >
                                        <NormalPoppins14
                                            text={data.name}
                                            style={{
                                                marginRight: 12,
                                            }}
                                            color='BLACK'
                                        />
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
    height: 42px;
    padding-right: 18px;
    padding-left: 18px;
    cursor: pointer;
    border-bottom: 0.5px solid #cccccc;
    &:hover {
        opacity: 0.5;
    }
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
