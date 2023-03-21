import React, { useContext } from 'react';

import styled from 'styled-components';

import RowContainer from '@/components/common/Container/RowContainer';
import { SemiBoldPoppins18 } from '@/components/common/Label';
import { ThemeContext } from '@/contexts/ThemeProvider';

interface RowIconListType {
    text: 'Solana' | 'Ethereum' | 'BnB';
    value: number;
}
const RowIconList = ({ text, value }: RowIconListType) => {
    const { colors } = useContext(ThemeContext);

    return (
        <RowContainer
            style={{
                minWidth: 120,
                justifyContent: 'space-between',
            }}
        >
            <CoinImage src={`assets/coins/icon/${text}.png`} alt={text} />
            <SemiBoldPoppins18
                text={
                    (Math.floor(value * 100) / 100).toLocaleString() +
                    ' ' +
                    text.slice(0, 3).toLocaleUpperCase()
                }
                style={{ color: colors.LIGHTSHADE900, lineHeight: '32px' }}
            />
        </RowContainer>
    );
};

const CoinImage = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;

export default RowIconList;
