import React, { useContext, useMemo } from 'react';

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

const ExchangeHistoryPage = () => {
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
                <Touchable>
                    <RowContainer>
                        <BoldPoppins14
                            text={'환전시간'}
                            style={{ color: colors.LIGHTSHADE900 }}
                        />
                        <img src={`assets/icons/ArrowDown.svg`} alt={'arrow'} />
                    </RowContainer>
                </Touchable>
                <NormalPoppins14
                    text={'환전금액'}
                    style={{ color: colors.LIGHTSHADE900 }}
                />
            </SpaceBetweenContainer>
            {[1, 2, 3, 4, 5, 6].map((data, index) => (
                <TransactionItem
                    leftValue={1233123}
                    leftCoin={'Solana'}
                    rightValue={1233123}
                    rightCoin={'Ethereum'}
                    key={index}
                />
            ))}
        </div>
    );
};

export default ExchangeHistoryPage;
