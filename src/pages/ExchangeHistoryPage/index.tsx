import React, { useContext, useMemo } from 'react';

import Touchable from '@/components/common/Button/Touchable';
import RowContainer from '@/components/common/Container/RowContainer';
import SpaceBetweenContainer from '@/components/common/Container/SpaceBetweenContainer';
import {
    BoldPoppins14,
    BoldPoppins20,
    NormalPoppins14,
} from '@/components/common/Label';
import RowIconList from '@/components/elements/ExchangeHistory/RowIconList';
import SummaryBox from '@/components/elements/ExchangingPage/SummaryBox';
import { ThemeContext } from '@/contexts/ThemeProvider';
import { Arrow } from '@/pages/ExchangeHistoryPage/styles';

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
            {[1, 2, 3, 4, 5, 6].map((data) => (
                <SpaceBetweenContainer style={listStyle}>
                    <NormalPoppins14
                        text={'2023-03-12, AM 10:50'}
                        style={{ color: colors.LIGHTSHADE900 }}
                    />
                    <RowContainer>
                        <RowIconList text={'Solana'} value={123123} />
                        <Arrow src={`assets/icons/Arrow.png`} alt={'arrow'} />
                        <RowIconList text={'Solana'} value={123123} />
                    </RowContainer>
                </SpaceBetweenContainer>
            ))}
        </div>
    );
};

export default ExchangeHistoryPage;
