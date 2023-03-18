import { CSSProperties } from 'react';

import {
    NormalInter12Font,
    NormalInter14Font,
    NormalInter16Font,
} from '@/components/common/Label/InterLabel/styles';

interface LabelProps {
    text: string | number;
    style?: CSSProperties;
    color?: string;
}

export const NormalInter12 = ({ text, style, ...props }: LabelProps) => {
    return (
        <NormalInter12Font style={style} {...props}>
            {text}
        </NormalInter12Font>
    );
};
export const NormalInter14 = ({ text, style, ...props }: LabelProps) => {
    return (
        <NormalInter14Font style={style} {...props}>
            {text}
        </NormalInter14Font>
    );
};
export const NormalInter16 = ({ text, style, ...props }: LabelProps) => {
    return (
        <NormalInter16Font style={style} {...props}>
            {text}
        </NormalInter16Font>
    );
};
