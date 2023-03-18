import styled from 'styled-components';

const basicFont = styled.p`
    font-family: 'Inter', sans-serif;
    line-height: 150%;
    color: ${(props) =>
        props.color
            ? props.theme.colors[props.color] || props.color
            : props.theme.colors.GRAY04};
`;

const NormalFont = styled(basicFont)`
    font-weight: 400;
`;

export const NormalInter12Font = styled(NormalFont)`
    font-size: 12px;
`;
export const NormalInter14Font = styled(NormalFont)`
    font-size: 14px;
`;
export const NormalInter16Font = styled(NormalFont)`
    font-size: 16px;
`;
