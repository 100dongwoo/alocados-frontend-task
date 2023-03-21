import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

import { historyType } from '@/zustand/type';

interface CoinProps {
    SOLANA: number;
    ETH: number;
    BNB: number;
}
interface persistProps extends CoinProps {
    exChangeHistory: historyType[];
}

interface CoinState extends persistProps {
    covertAction: (value: {
        history: historyType;
        coinValues: CoinProps;
    }) => void;
    reset: () => void;
}

const DEFAULT_PROPS: persistProps = {
    SOLANA: 0,
    ETH: 2000,
    BNB: 0,
    exChangeHistory: [],
};

export type CoinStorePersist = (
    config: StateCreator<CoinState>,
    options: PersistOptions<persistProps>
) => StateCreator<CoinState>;

const CoinStore = create<CoinState>(
    (persist as CoinStorePersist)(
        (set) => ({
            ...DEFAULT_PROPS,
            exChangeHistory: [],

            covertAction: ({
                history,
                coinValues,
            }: {
                history: historyType;
                coinValues: CoinProps;
            }) => {
                set((state) => ({
                    ...coinValues,
                    exChangeHistory: state.exChangeHistory.concat(history),
                }));
            },
            reset: () => {
                set(DEFAULT_PROPS);
            },
        }),
        {
            name: 'coin-store',
        }
    )
);

export default CoinStore;
