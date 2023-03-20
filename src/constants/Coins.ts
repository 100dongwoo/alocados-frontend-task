type coinList = 'Ethereum' | 'BnB' | 'Solana' | null;

interface CoinType {
    Solana: {
        name: 'Solana';
        image: 'assets/coins/icon/Solana.png';
    };
    Ethereum: {
        name: 'Ethereum';
        image: 'assets/coins/icon/Ethereum.png';
    };
    BnB: {
        name: 'BnB';
        image: 'assets/coins/icon/BnB.png';
    };
}
export const Coins = {
    Solana: {
        name: 'Solana',
        image: 'assets/coins/icon/Solana.png',
    },
    Ethereum: {
        name: 'Ethereum',
        image: 'assets/coins/icon/Ethereum.png',
    },
    BnB: {
        name: 'BnB',
        image: 'assets/coins/icon/BnB.png',
    },
};

export const COINPOWER = {
    Ethereum: 50,
    BnB: 1,
    Solana: 5000,
};

export const ConversionCoin = (
    fromCoin: coinList,
    toCoin: coinList,
    value: number
) => {
    if (fromCoin === null || toCoin === null) {
        return value;
    }
    return (COINPOWER[toCoin] * value) / COINPOWER[fromCoin];
};

// 50이더를는 1비트코인

// 3비트코인은 15000->    3*솔라나 / value
