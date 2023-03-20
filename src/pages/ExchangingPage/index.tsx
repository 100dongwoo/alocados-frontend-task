import React, { useCallback, useContext, useMemo, useState } from 'react';

import Touchable from '@/components/common/Button/Touchable';
import TransactionButton from '@/components/common/Button/TransactionButton';
import RowContainer from '@/components/common/Container/RowContainer';
import SpaceBetweenContainer from '@/components/common/Container/SpaceBetweenContainer';
import { DisableDropDown } from '@/components/common/DisableDropDown';
import ErrorInput from '@/components/common/Input/ErrorInput';
import TransactionItem from '@/components/common/Items/TransactionItem';
import { BoldPoppins20, SemiBoldPoppins18 } from '@/components/common/Label';
import { NormalInter16 } from '@/components/common/Label/InterLabel';
import SummaryBox from '@/components/elements/ExchangingPage/SummaryBox';
import { ConversionCoin } from '@/constants/Coins';
import { ThemeContext } from '@/contexts/ThemeProvider';
import useInput from '@/hooks/useInput';
import { SwapImage } from '@/pages/ExchangingPage/styles';

type coinType = null | 'Solana' | 'Ethereum' | 'BnB';
const ExchangingPage = () => {
    const [fromSelectCoin, setFromSelectCoin] = useState<coinType>(null);
    const [toSelectCoin, setToSelectCoin] = useState<coinType>(null);

    const [conversionCount, onChangeConversionCount, setConversionCount] =
        useInput('');

    const { colors } = useContext(ThemeContext);

    const RowStyle = useMemo(
        () => ({
            gap: 32,
            height: 56,
            flex: 1,
        }),
        []
    );

    const onClickTransaction = () => {};

    const onClickDropDown = useCallback(
        (item: any) => {
            setFromSelectCoin(item.name);
        },
        [fromSelectCoin]
    );

    const onClickToDropDown = useCallback(
        (item: any) => {
            setToSelectCoin(item.name);
        },
        [toSelectCoin]
    );

    const onClickSwap = useCallback(() => {
        setFromSelectCoin(toSelectCoin);
        setToSelectCoin(fromSelectCoin);
    }, [toSelectCoin, fromSelectCoin]);

    const inputError =
        ConversionCoin(
            fromSelectCoin,
            toSelectCoin,
            Number(conversionCount ?? 0)
        ) < 1;
    const hasError = inputError || !toSelectCoin;

    return (
        <div
            style={{
                height: 386,
                maxWidth: 960,
                margin: 'auto',
            }}
        >
            <SpaceBetweenContainer>
                <BoldPoppins20
                    text={'환전하기'}
                    style={{
                        color: colors.LIGHTSHADE900,
                        marginBottom: 24,
                    }}
                />
                <NormalInter16
                    text={`\u00b7 거래 시 갱신`}
                    style={{ color: colors.LIGHTSHADE900 }}
                />
            </SpaceBetweenContainer>
            <RowContainer>
                <div style={{ marginRight: 16 }}>
                    <SummaryBox />
                </div>
                <div style={{ width: '100%' }}>
                    <RowContainer style={RowStyle}>
                        <ErrorInput
                            value={conversionCount}
                            onChange={onChangeConversionCount}
                            disable={inputError}
                        />

                        <DisableDropDown
                            onClick={onClickDropDown}
                            value={fromSelectCoin}
                        />
                    </RowContainer>
                    <Touchable
                        style={{
                            justifyContent: 'center',
                            margin: '29px auto',
                            display: 'block',
                        }}
                        onClick={onClickSwap}
                    >
                        <SwapImage src={'assets/icons/Swap.png'} alt={'swap'} />
                    </Touchable>
                    <RowContainer style={RowStyle}>
                        <SemiBoldPoppins18
                            text={
                                toSelectCoin && toSelectCoin
                                    ? ConversionCoin(
                                          fromSelectCoin,
                                          toSelectCoin,
                                          Number(conversionCount ?? 0)
                                      )
                                    : ''
                            }
                            style={{
                                color: colors.PRIMARY100,
                                marginLeft: 14,
                                width: '100%',
                            }}
                        />
                        <DisableDropDown
                            onClick={onClickToDropDown}
                            value={toSelectCoin}
                        />
                    </RowContainer>

                    <TransactionButton
                        onClick={onClickTransaction}
                        style={{ margin: '41px 0px' }}
                        disable={hasError}
                    />
                    <TransactionItem
                        leftValue={1233123}
                        leftCoin={'Ethereum'}
                        rightValue={1233123}
                        rightCoin={'Ethereum'}
                    />
                </div>
            </RowContainer>
        </div>
    );
};

export default ExchangingPage;
