// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import TimeLine from '../components/TimeLine';
import Circular from '../components/Circular';
import Introduction from '../components/Introduction';
import CardsContainer from '../components/CardsContainer';

function Container({ children, styles, id }) {
  const defaultStyle =
    'w-full m-auto sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[50%]';
  return (
    <div id={id} className={`${defaultStyle} ${styles}`}>
      {children}
    </div>
  );
}

function Home() {
  return (
    <main className="relative">
      <Container styles="fixed z-50 left-[50%] -translate-x-[50%] p-2">
        <NavBar />
      </Container>
      <Container styles="overflow-hidden pb-0 pt-24 sm:pt-32">
        <Introduction />
      </Container>
      <main>
        <Container id="projects">
          <CardsContainer title="Projects" />
        </Container>
        <Container id="about">
          <TimeLine title="About Me" />
        </Container>
        <Container id="blog" styles="pt-12">
          <Circular title="Blog"/>
        </Container>
        <Container id="github" styles="pb-12 pt-32">
          <Slider title="Github" />
        </Container>
      </main>
      <Container styles="p-0">
        <Footer />
      </Container>
    </main>
  );
}

export default Home;
