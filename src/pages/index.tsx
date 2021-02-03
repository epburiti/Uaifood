import React from 'react';
import Head from 'next/head';
import LogoWhite from '../assets/uaifood/logo-white.jpg';
import { Container } from '../styles/pages/Home';

import Search from '../components/Search';
const Home: React.FC = () => (
  <div>
    <Head>
      <title>UaiFood</title>
    </Head>

    <main>
      <Container>
        <div className="logo">
          <img src={LogoWhite} alt="logo ifood" />
        </div>
        <h1 className="txt-desc">
          Descubra os melhores restaurantes em sua cidade
        </h1>
        <Search navBar={false} />
      </Container>
    </main>
  </div>
);

export default Home;
