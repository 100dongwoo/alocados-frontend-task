import create from 'zustand';

import { historyType } from '@/zustand/type';

interface CoinProps {
    SOLANA: number;
    ETH: number;
    BNB: number;
}

interface CoinState extends CoinProps {
    exChangeHistory: historyType[];
    covertAction: (value: {
        history: historyType;
        coinValues: CoinProps;
    }) => void;
}

const DEFAULT_PROPS: CoinProps = {
    SOLANA: 0,
    ETH: 2000,
    BNB: 0,
};

const CoinStore = create<CoinState>((set) => ({
    ...DEFAULT_PROPS,
    exChangeHistory: [],

    covertAction: ({ history, coinValues }: any) => {
        set((state) => ({
            ...coinValues,
            exChangeHistory: state.exChangeHistory.concat(history),
        }));
    },
}));

export default CoinStore;
