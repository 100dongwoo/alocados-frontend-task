import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { BoldPoppins20 } from '@/components/common/Label';

const ErrorPage = () => {
    return (
        <Container>
            <h1>404 - Page Not Found</h1>
            <Link to='/'>
                <BoldPoppins20 text={'Go back home'} />
            </Link>
        </Container>
    );
};
export const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;
export default ErrorPage;
