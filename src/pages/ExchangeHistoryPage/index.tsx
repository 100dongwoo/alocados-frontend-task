import React, { useContext, useMemo } from 'react';

import dayjs from 'dayjs';

import Touchable from '@/components/common/Button/Touchable';
import RowContainer from '@/components/common/Container/RowContainer';
import SpaceBetweenContainer from '@/components/common/Container/SpaceBetweenContainer';
import TransactionItem from '@/components/common/Items/TransactionItem';
import {
    BoldPoppins14,
    BoldPoppins20,
    NormalPoppins14,
} from '@/components/common/Label';
import { ThemeContext } from '@/contexts/ThemeProvider';
import useToggle from '@/hooks/useToggle';
import CoinStore from '@/zustand/store';
import { historyType } from '@/zustand/type';

const ExchangeHistoryPage = () => {
    const [isAscending, toggle, setIsAscending] = useToggle();
    const sortLeftValue = isAscending ? 1 : -1;
    const sortRightValue = !isAscending ? 1 : -1;

    const { colors } = useContext(ThemeContext);

    const { exChangeHistory } = CoinStore();

    const listStyle = useMemo(
        () => ({
            background: colors.LIGHTSHADE100,
            borderRadius: 12,
            width: '100%',
            height: 48,
            marginBottom: 8,
            padding: '0px 16px',
        }),
        []
    );

    return (
        <div
            style={{
                maxWidth: 634,
                margin: 'auto',
            }}
        >
            <BoldPoppins20
                text={'환전 내역'}
                style={{ color: colors.LIGHTSHADE900, marginBottom: 24 }}
            />
            <SpaceBetweenContainer style={listStyle}>
                <Touchable onClick={toggle}>
                    <RowContainer>
                        <BoldPoppins14
                            text={'환전시간'}
                            style={{ color: colors.LIGHTSHADE900 }}
                        />
                        <img
                            src={`assets/icons/ArrowDown.svg`}
                            alt={'arrow'}
                            style={{
                                transform: isAscending
                                    ? 'rotate( 180deg )'
                                    : 'rotate( 360deg )',
                            }}
                        />
                    </RowContainer>
                </Touchable>
                <NormalPoppins14
                    text={'환전금액'}
                    style={{ color: colors.LIGHTSHADE900 }}
                />
            </SpaceBetweenContainer>
            {exChangeHistory
                .sort((a: historyType, b: historyType) =>
                    dayjs(a.date).isAfter(dayjs(b.date))
                        ? sortLeftValue
                        : sortRightValue
                )
                ?.map((data, index) => (
                    <TransactionItem
                        date={data.date}
                        leftValue={data.fromCoinValue}
                        leftCoin={data.fromCoin}
                        rightValue={data.toCoinValue}
                        rightCoin={data.toCoin}
                        key={index}
                    />
                ))}
        </div>
    );
};

export default ExchangeHistoryPage;
