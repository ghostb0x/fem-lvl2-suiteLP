import React from 'react';
import Header from '../Header/Header';
import MainHero from '../MainHero/MainHero';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';
import { styled } from 'styled-components';

function App() {
  return (
    <Wrapper>
      <Header />
      <main>
        <MainHero />
        <Testimonial />
      </main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--color-white);
`;

export default App;
