import React, { CSSProperties } from 'react';

import styled from 'styled-components';

interface RowContainer {
    children: JSX.Element | JSX.Element[];
    style?: CSSProperties;
}

const RowContainer = ({ children, style }: RowContainer) => {
    return <Container style={style}>{children}</Container>;
};
const Container = styled.div`
    display: flex;
    align-items: center;
`;

export default RowContainer;
