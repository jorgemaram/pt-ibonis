import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import bannerImage from '../home-banner.jpg';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 50%;
  margin: 0 auto;
  font-family:"Helvetica neue", Helvetica, sans-serif;
  font-weight: 400;
  font-weight: bold;
  font-size: 33px;
  line-height: 36px;

`

const Title = styled.h1`
  margin-bottom: 20px;
`

const Image = styled.img`
  max-width: 100%;
  margin-bottom: 10px;
`

function App() {

  const [nif, getNif] = useState('');
  const [activity_sector, getActivity_sector] = useState('');

  return (
    <>
      <Header />
      <Container>
        <Image src={bannerImage} alt="imagen banner" />
        <Title>Evalúa y mejora tu negocio</Title>
        <Form
          getNif={getNif}
          getActivity_sector={getActivity_sector}/>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
