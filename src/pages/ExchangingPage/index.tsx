import React, { useCallback, useContext, useMemo, useState } from 'react';

import dayjs from 'dayjs';
import internal from 'stream';

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
import CoinStore from '@/zustand/store';

type coinType = null | 'Solana' | 'Ethereum' | 'BnB';

type ObjType = {
    [index: string]: string;
    Solana: 'SOLANA';
    Ethereum: 'ETH';
    BnB: 'BNB';
};
const COINTYPE: ObjType = {
    Solana: 'SOLANA',
    Ethereum: 'ETH',
    BnB: 'BNB',
};

const ExchangingPage = () => {
    const { colors } = useContext(ThemeContext);

    const { covertAction, exChangeHistory, ETH, SOLANA, BNB } = CoinStore();
    const coins = CoinStore();

    const lastHistory = exChangeHistory[exChangeHistory.length - 1];
    const [fromSelectCoin, setFromSelectCoin] = useState<coinType>(null);
    const [toSelectCoin, setToSelectCoin] = useState<coinType>(null);
    const [conversionCount, onChangeConversionCount, setConversionCount] =
        useInput('');

    const covertValue = ConversionCoin(
        fromSelectCoin,
        toSelectCoin,
        parseFloat(conversionCount ? conversionCount : '0')
    );
    const inputError =
        conversionCount === '0' ||
        // covertValue < 1 ||
        Boolean(
            fromSelectCoin &&
                coins[COINTYPE[fromSelectCoin]] < parseFloat(conversionCount)
        );
    const hasError =
        (fromSelectCoin && fromSelectCoin === toSelectCoin) ||
        conversionCount.length === 0 ||
        inputError ||
        !toSelectCoin ||
        fromSelectCoin === null;

    const RowStyle = useMemo(
        () => ({
            gap: 32,
            height: 56,
            flex: 1,
        }),
        []
    );

    const onClickTransaction = () => {
        if (hasError) {
            return;
        }
        if (Math.floor(covertValue * 100) / 100 <= 0) {
            alert('환전코인이 0.01 이상만 가능합니다.');
            return;
        }
        const obj = {
            fromCoin: fromSelectCoin,
            fromCoinValue: parseFloat(conversionCount),
            toCoin: toSelectCoin,
            toCoinValue: covertValue,
            date: dayjs(),
        };

        let coinValues = { ETH, SOLANA, BNB };
        const beforeFromCoin = coinValues[COINTYPE[fromSelectCoin]];
        const beforeAfterCoin = coinValues[COINTYPE[toSelectCoin]];

        coinValues[COINTYPE[fromSelectCoin]] =
            beforeFromCoin - parseFloat(conversionCount);
        coinValues[COINTYPE[toSelectCoin]] =
            beforeAfterCoin + parseFloat(String(covertValue));

        covertAction({ history: obj, coinValues });
        setConversionCount('');
    };

    const onClickDropDown = useCallback(
        (item: { name: coinType; image: string }) => {
            setFromSelectCoin(item.name);
        },
        [fromSelectCoin]
    );

    const onClickToDropDown = useCallback(
        (item: { name: coinType }) => {
            setToSelectCoin(item?.name);
        },
        [toSelectCoin]
    );

    const onClickSwap = useCallback(() => {
        setFromSelectCoin(toSelectCoin);
        setToSelectCoin(fromSelectCoin);
    }, [toSelectCoin, fromSelectCoin]);

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
                            disable={inputError && fromSelectCoin !== null}
                        />

                        <DisableDropDown
                            onClick={onClickDropDown}
                            value={fromSelectCoin}
                            inputValue={conversionCount}
                            anotherValue={toSelectCoin}
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
                                toSelectCoin && toSelectCoin ? covertValue : ''
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
                            anotherValue={fromSelectCoin}
                        />
                    </RowContainer>

                    <TransactionButton
                        onClick={onClickTransaction}
                        style={{ margin: '41px 0px' }}
                        disable={hasError}
                    />
                    <>
                        {exChangeHistory.length > 0 && (
                            <TransactionItem
                                date={lastHistory.date}
                                leftValue={lastHistory.fromCoinValue}
                                leftCoin={lastHistory.fromCoin}
                                rightValue={lastHistory.toCoinValue}
                                rightCoin={lastHistory.toCoin}
                            />
                        )}
                    </>
                </div>
            </RowContainer>
        </div>
    );
};

export default ExchangingPage;
