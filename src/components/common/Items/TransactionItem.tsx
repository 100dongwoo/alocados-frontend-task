import React, { CSSProperties, useContext, useMemo } from 'react';

import RowContainer from '@/components/common/Container/RowContainer';
import SpaceBetweenContainer from '@/components/common/Container/SpaceBetweenContainer';
import { NormalPoppins14 } from '@/components/common/Label';
import RowIconList from '@/components/elements/ExchangeHistory/RowIconList';
import { ThemeContext } from '@/contexts/ThemeProvider';
import { Arrow } from '@/pages/ExchangeHistoryPage/styles';

interface TransactionItemType {
    style?: CSSProperties;
    leftValue: number;
    leftCoin: 'Solana' | 'Ethereum' | 'BnB';
    rightValue: number;
    rightCoin: 'Solana' | 'Ethereum' | 'BnB';
}
const TransactionItem = ({
    style,
    leftValue,
    leftCoin,
    rightValue,
    rightCoin,
}: TransactionItemType) => {
    const { colors } = useContext(ThemeContext);

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
        <SpaceBetweenContainer style={{ ...listStyle, ...style }}>
            <NormalPoppins14
                text={'2023-03-12, AM 10:50'}
                style={{ color: colors.LIGHTSHADE900 }}
            />
            <RowContainer>
                <RowIconList text={leftCoin} value={leftValue} />
                <Arrow src={`assets/icons/Arrow.png`} alt={'arrow'} />
                <RowIconList text={rightCoin} value={rightValue} />
            </RowContainer>
        </SpaceBetweenContainer>
    );
};

export default TransactionItem;
