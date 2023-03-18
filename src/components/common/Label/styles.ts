import styled from 'styled-components';

const basicFont = styled.p`
    font-family: 'Poppins', sans-serif;
    line-height: 150%;
    color: ${(props) =>
        props.color
            ? props.theme.colors[props.color] || props.color
            : props.theme.colors.GRAY04};
`;

const BoldFont = styled(basicFont)`
    font-weight: 700;
`;

const SemiBoldFont = styled(basicFont)`
    font-weight: 600;
`;

const LightFont = styled(basicFont)`
    font-weight: 500;
`;

const NormalFont = styled(basicFont)`
    font-weight: 400;
`;

export const BoldPoppins12Font = styled(BoldFont)`
    font-size: 12px;
`;
export const BoldPoppins14Font = styled(BoldFont)`
    font-size: 14px;
`;
export const BoldPoppins15Font = styled(BoldFont)`
    font-size: 15px;
`;

export const BoldPoppins16Font = styled(BoldFont)`
    font-size: 16px;
`;
export const BoldPoppins18Font = styled(BoldFont)`
    font-size: 18px;
`;
export const BoldPoppins20Font = styled(BoldFont)`
    font-size: 20px;
`;

export const SemiBoldPoppins12Font = styled(SemiBoldFont)`
    font-size: 12px;
`;
export const SemiBoldPoppins14Font = styled(SemiBoldFont)`
    font-size: 14px;
`;
export const SemiBoldPoppins15Font = styled(SemiBoldFont)`
    font-size: 15px;
`;
export const SemiBoldPoppins16Font = styled(SemiBoldFont)`
    font-size: 16px;
`;
export const SemiBoldPoppins18Font = styled(SemiBoldFont)`
    font-size: 18px;
`;
export const SemiBoldPoppins20Font = styled(SemiBoldFont)`
    font-size: 20px;
`;

export const LightPoppins12Font = styled(LightFont)`
    font-size: 12px;
`;
export const LightPoppins14Font = styled(LightFont)`
    font-size: 14px;
`;
export const LightPoppins15Font = styled(LightFont)`
    font-size: 15px;
`;
export const LightPoppins16Font = styled(LightFont)`
    font-size: 16px;
`;
export const LightPoppins18Font = styled(LightFont)`
    font-size: 18px;
`;
export const LightPoppins20Font = styled(LightFont)`
    font-size: 20px;
`;

export const NormalPoppins12Font = styled(NormalFont)`
    font-size: 12px;
`;
export const NormalPoppins14Font = styled(NormalFont)`
    font-size: 14px;
`;
export const NormalPoppins15Font = styled(NormalFont)`
    font-size: 15px;
`;
export const NormalPoppins16Font = styled(NormalFont)`
    font-size: 16px;
`;
export const NormalPoppins18Font = styled(NormalFont)`
    font-size: 18px;
`;
export const NormalPoppins20Font = styled(NormalFont)`
    font-size: 20px;
`;
