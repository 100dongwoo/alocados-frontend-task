import create from 'zustand';

type ObjType = {
    [index: string]: string;
    Solana: 'SOLANA';
    Ethereum: 'ETH';
    BnB: 'BNB';
};

interface CoinProps {
    SOLANA: number;
    ETH: number;
    BNB: number;
}

interface CoinState extends CoinProps {
    exChangeHistory: historyType[];
    covertAction: (value: historyType) => void;
}

const DEFAULT_PROPS: CoinProps = {
    SOLANA: 0,
    ETH: 2000,
    BNB: 0,
};

const CoinStore = create<CoinState>((set) => ({
    ...DEFAULT_PROPS,
    exChangeHistory: [],

    covertAction: (value) => {
        set((state) => ({
            exChangeHistory: state.exChangeHistory.concat(value),
        }));
    },
}));

export default CoinStore;
