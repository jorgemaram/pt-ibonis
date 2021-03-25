import React from 'react';
import styled from '@emotion/styled';

const ErrorMessage = styled.p`
    padding: 1rem;
    color: #e44b68;
    font-size: 16px;
    line-height: 24px;
    font-family: "Helvetica neue", Helvetica, sans-serif;
`;

const Error = ({ mensaje }) => {
    return (
        <ErrorMessage>{mensaje}</ErrorMessage>
    );
}

export default Error;