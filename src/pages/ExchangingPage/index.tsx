import React, { useContext, useMemo } from 'react';

import Touchable from '@/components/common/Button/Touchable';
import TransactionButton from '@/components/common/Button/TransactionButton';
import RowContainer from '@/components/common/Container/RowContainer';
import SpaceBetweenContainer from '@/components/common/Container/SpaceBetweenContainer';
import ErrorInput from '@/components/common/Input/ErrorInput';
import TransactionItem from '@/components/common/Items/TransactionItem';
import {
    BoldPoppins20,
    NormalPoppins16,
    SemiBoldPoppins18,
} from '@/components/common/Label';
import { NormalInter16 } from '@/components/common/Label/InterLabel';
import SummaryBox from '@/components/elements/ExchangingPage/SummaryBox';
import { ThemeContext } from '@/contexts/ThemeProvider';
import { SwapImage } from '@/pages/ExchangingPage/styles';

const ExchangingPage = () => {
    const { colors } = useContext(ThemeContext);

    const RowStyle = useMemo(
        () => ({
            gap: 32,
            height: 56,
            flex: 1,
        }),
        []
    );

    const onClickTransaction = () => {};

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
                <p>&#8228;</p>
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
                        <ErrorInput />
                    </RowContainer>
                    <Touchable
                        style={{
                            justifyContent: 'center',
                            margin: '29px auto',
                            display: 'block',
                        }}
                    >
                        <SwapImage src={'assets/icons/Swap.png'} alt={'swap'} />
                    </Touchable>
                    <RowContainer style={RowStyle}>
                        <SemiBoldPoppins18
                            text={'100'}
                            style={{ color: colors.PRIMARY100, marginLeft: 14 }}
                        />
                    </RowContainer>

                    <TransactionButton
                        onClick={onClickTransaction}
                        style={{ margin: '41px 0px' }}
                    />
                    <TransactionItem
                        leftValue={1233123}
                        leftCoin={'Ethereum'}
                        rightValue={1233123}
                        rightCoin={'Ethereum'}
                    />
                </div>
            </RowContainer>
        </div>
    );
};

export default ExchangingPage;
