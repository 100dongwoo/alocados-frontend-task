import React, { useContext } from 'react';

import { useStore } from 'zustand';

import RowContainer from '@/components/common/Container/RowContainer';
import { SemiBoldPoppins20 } from '@/components/common/Label';
import {
    Container,
    Line,
} from '@/components/elements/ExchangingPage/SummaryBox/styles';
import SummaryItem from '@/components/elements/SummaryItem';
import { ThemeContext } from '@/contexts/ThemeProvider';
import { DecimalPoint } from '@/utils';
import CoinStore from '@/zustand/store';

const SummaryBox = () => {
    const { BNB, ETH, SOLANA } = CoinStore();
    const { colors } = useContext(ThemeContext);

    return (
        <Container>
            <SemiBoldPoppins20
                text={'요약'}
                style={{ color: colors.LIGHTSHADE700 }}
            />
            <Line />
            <RowContainer
                style={{
                    flexDirection: 'column',
                    gap: 24,
                    alignItems: 'flex-start',
                }}
            >
                <SummaryItem text={'Solana'} value={DecimalPoint(SOLANA)} />
                <SummaryItem text={'Ethereum'} value={DecimalPoint(ETH)} />
                <SummaryItem text={'BnB'} value={DecimalPoint(BNB)} />
            </RowContainer>
        </Container>
    );
};

export default SummaryBox;
