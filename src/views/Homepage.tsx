import Title from '@components/Title';
import About from '@components/about/About';
import Banner from '@components/Banner';
import Contact from '@components/Contact';
import CardsWorkContainer from '@components/cardsWork/CardsWorkContainer';

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
