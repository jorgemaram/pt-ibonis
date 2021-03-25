import React from 'react';
import styled from '@emotion/styled';
import logoImage from '../inbonislogo.png';

const EndingFooter = styled.div`
    margin: 100px auto;
    max-width: 70%;
    border-bottom: 1px solid #dcdcdc;
    align-items: center;
`;
const Logo = styled.img`
    max-width: 20%;
`;

const Footer = () => {
    return (
        <EndingFooter>
            <Logo src={logoImage} />
        </EndingFooter>
    );
}

export default Footer;
