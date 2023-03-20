import { Dayjs } from 'dayjs';

interface historyType {
    date: Dayjs;
    fromCoin: 'Solana' | 'Ethereum' | 'BnB';
    fromCoinValue: number;
    toCoin: 'Solana' | 'Ethereum' | 'BnB';
    toCoinValue: number;
}
