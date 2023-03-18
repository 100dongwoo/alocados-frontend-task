import React, { useContext } from 'react';

import { BoldPoppins20 } from '@/components/common/Label';
import SummaryBox from '@/components/elements/ExchangingPage/SummaryBox';
import { ThemeContext } from '@/contexts/ThemeProvider';

const ExchangingPage = () => {
    const { colors } = useContext(ThemeContext);

    return (
        <div
            style={{
                height: 386,
                maxWidth: 952,
                margin: 'auto',
            }}
        >
            <BoldPoppins20
                text={'환전하기'}
                style={{ color: colors.LIGHTSHADE900, marginBottom: 24 }}
            />
            <SummaryBox />
        </div>
    );
};

export default ExchangingPage;
