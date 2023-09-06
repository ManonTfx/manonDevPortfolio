import Title from '@components/Title';
import About from '@components/about/About';
import Banner from '@components/banner/Banner';
import Contact from '@components/Contact';
import CardsWorkContainer from '@components/cardsProjects/CardsProjectsContainer';

function Homepage() {
  return (
    <div>
      <Title />
      <About />
      <CardsWorkContainer />
      <Banner />
      <Contact />
    </div>
  );
}

export default Homepage;
