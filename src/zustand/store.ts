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
    SOLANA: 1211023512.34,
    ETH: 512.01,
    BNB: 0.35,
};

const CoinStore = create<CoinState>((set) => ({
    ...DEFAULT_PROPS,
}));

export default CoinStore;
