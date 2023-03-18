import React, { useContext } from 'react';

import RowContainer from '@/components/common/Container/RowContainer';
import { SemiBoldPoppins20 } from '@/components/common/Label';
import {
    Container,
    Line,
} from '@/components/elements/ExchangingPage/SummaryBox/styles';
import SummaryItem from '@/components/elements/SummaryItem';
import { ThemeContext } from '@/contexts/ThemeProvider';

const SummaryBox = () => {
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
                <SummaryItem text={'Solana'} value={123123} />
                <SummaryItem text={'Ethereum'} value={123123} />
                <SummaryItem text={'BnB'} value={123123} />
            </RowContainer>
        </Container>
    );
};

export default SummaryBox;
