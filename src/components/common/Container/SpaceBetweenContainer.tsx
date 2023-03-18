import React, { CSSProperties } from 'react';

import styled from 'styled-components';

interface SpaceBetweenContainer {
    children: JSX.Element | JSX.Element[];
    style?: CSSProperties;
}

const SpaceBetweenContainer = ({ children, style }: SpaceBetweenContainer) => {
    return <Container style={style}>{children}</Container>;
};
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default SpaceBetweenContainer;
