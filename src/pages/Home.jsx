// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import TimeLine from '../components/TimeLine';
import Circular from '../components/Circular';
import Introduction from '../components/Introduction';
import CardsContainer from '../components/CardsContainer';
import Card from '../components/Card';
import Container from '../components/Container';

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
          <CardsContainer title="Projects">
            <Card name="Project A001" />
            <Card name="Project A002" />
            <Card name="Project A003" />
            <Card name="Project A004" />
            <Card name="Project A005" />
            <Card name="Project A006" />
            <Card name="Project A007" />
            <Card name="Project A008" />
            <Card name="Project A009" />
          </CardsContainer>
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
