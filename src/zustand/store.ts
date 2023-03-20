import create from 'zustand';

interface CoinProps {
    SOLANA: number;
    ETH: number;
    BNB: number;
}

interface CoinState extends CoinProps {
    // addCoin: () => void;
}

const DEFAULT_PROPS: CoinProps = {
    SOLANA: 0,
    ETH: 2000,
    BNB: 0,
};

const CoinStore = create<CoinState>((set) => ({
    ...DEFAULT_PROPS,
}));

export default CoinStore;
