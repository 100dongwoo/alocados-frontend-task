import React, { CSSProperties } from 'react';

import styled from 'styled-components';

interface Type {
    children?: JSX.Element | JSX.Element[];
    style?: CSSProperties;
    onClick?: (item?: any) => void;
}

const Touchable = ({ children, onClick, style }: Type) => {
    return (
        <Button onClick={onClick} style={style}>
            <div>{children}</div>
        </Button>
    );
};

const Button = styled.button`
    padding: 0px;
    margin: 0px;
    background: transparent;
    cursor: pointer;
`;
export default Touchable;
