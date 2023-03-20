import React, { useContext } from 'react';

import RowContainer from '@/components/common/Container/RowContainer';
import { NormalPoppins18, SemiBoldPoppins18 } from '@/components/common/Label';
import { CoinImage, Container } from '@/components/elements/SummaryItem/styles';
import { ThemeContext } from '@/contexts/ThemeProvider';

interface SummaryItemType {
    text: 'Solana' | 'Ethereum' | 'BnB';
    value: number;
}
const SummaryItem = ({ text, value }: SummaryItemType) => {
    const { colors } = useContext(ThemeContext);

    return (
        <Container>
            <RowContainer>
                <CoinImage src={`assets/coins/${text}.png`} alt={text} />
                <NormalPoppins18
                    text={text}
                    style={{ color: colors.LIGHTSHADE700 }}
                />
            </RowContainer>
            <SemiBoldPoppins18
                text={
                    value.toLocaleString('en-US', {
                        maximumFractionDigits: 10,
                    }) +
                    ' ' +
                    text.slice(0, 3).toLocaleUpperCase()
                }
                style={{ color: colors.LIGHTSHADE900, lineHeight: '32px' }}
            />
        </Container>
    );
};

export default SummaryItem;
