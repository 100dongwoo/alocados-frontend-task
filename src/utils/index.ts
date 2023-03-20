type coinList = 'Ethereum' | 'BnB' | 'Solana';

export const DecimalPoint = (value: number) => {
    return Math.round(value * 10000000000) / 10000000000;
};

const ConvertCoi2n = {
    Solana: {
        Ethereum: '',
        BnB: '',
        Solana: '',
    },
    Ethereum: {
        Ethereum: '',
        BnB: '',
        Solana: '',
    },
    BnB: {
        Ethereum: '',
        BnB: '',
        Solana: '',
    },
};

// export const ConvertCoin = (
//     fromType: coinList,
//     toType: coinList,
//     value: number
// ) => {
//     if (fromType === 'Solana') {
//         if (toType === 'Ethereum') {
//             value *= 1;
//         } else if (toType === 'BnB') {
//         } else if (toType === 'Solana') {
//         }
//     } else if (fromType === 'Ethereum') {
//         if (toType === 'Ethereum') {
//         } else if (toType === 'BnB') {
//         } else if (toType === 'Solana') {
//         }
//     } else if (fromType === 'BnB') {
//         if (toType === 'Ethereum') {
//         } else if (toType === 'BnB') {
//         } else if (toType === 'Solana') {
//         }
//     }
//     return value;
// };
