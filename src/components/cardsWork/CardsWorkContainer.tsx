import { useEffect, useRef } from 'react';
import opxDashboard from '@assets/img/opx_dashboard.png';
import drapo from '@assets/img/drapo.png';
import drapo_solution from '@assets/img/drapo_solution.png';
import remi_blanchet from '@assets/img/remi_blanchet.png';
import valentine_bouvet from '@assets/img/valentine_bouvet.png';
import techpath from '@assets/img/techpath.png';
// import { MenuBurgerContext } from '../../context';
import OneCardWork from './OneCardWork';

function CardsWorkContainer(): JSX.Element {
  const worksCardsContainerRef = useRef<HTMLDivElement>(null);
  const scrollingDownRef = useRef<boolean>(false);
  const coolDownRef = useRef(false);

  //   const { clickToContact } = useContext(MenuBurgerContext);

  const works = [
    {
      id: 1,
      companyName: 'OPX',
      stacks: ['Dashboard', 'React / Typescript'],
      img: opxDashboard,
      description:
        "J'ai conçu et développé avec succès une plateforme novatrice de simplification des démarches administratives en ligne, matérialisée sous la forme d'un tableau de bord intuitif et efficace, offrant une expérience utilisateur optimale tout en automatisant et en rationalisant les processus complexes",
    },
    {
      id: 2,
      companyName: 'Drapo',
      stacks: ['LandingPage', 'Dashboard', 'React / Typescript', 'Gatsby'],
      img: drapo,
      description:
        "J'ai été fièrement impliquée dans la réalisation de multiples projets au sein de Drapo. D'une part, j'ai intégré une landing page qui met en avant les caractéristiques de Drapo. D'autre part, j'ai contribué au développement d'un outil de gestion, lancé le 24 octobre 2022, pour la gestion des CEE et de MaPrimeRénov’ au profit de leur vaste réseau d'installateurs partenaires.",
    },
    {
      id: 3,
      companyName: 'Drapo Solution',
      stacks: ['LandingPage', 'React / Typescript', 'Gatsby'],
      img: drapo_solution,
      description:
        "J'ai eu l'occasion d'intégrer une landing page dynamique, mettant en avant les réalisations de mon ancienne entreprise. ",
    },
    {
      id: 4,
      companyName: 'Remi Blanchet',
      stacks: ['E-Commerce', 'Shopify'],
      img: remi_blanchet,
      description:
        "J'ai conçu et réalisé avec succès un site e-commerce sur mesure pour Remi Blanchet, offrant une plateforme fluide et convaincante pour présenter ses produits de manière attrayante et faciliter les transactions en ligne.",
    },
    {
      id: 5,
      companyName: 'Valentine Bouvet',
      stacks: ['E-commerce', 'Shopify'],
      img: valentine_bouvet,
      description:
        "J'ai créé un site vitrine personnalisé pour Valentine Bouvet, mettant en avant son identité et son travail de manière élégante, offrant ainsi une plateforme en ligne captivante pour découvrir son univers artistique.",
    },
    {
      id: 6,
      companyName: 'Techpath',
      stacks: ['LandingPage', 'Wordpress'],
      img: techpath,
      description:
        "J'ai réalisé une landing page stratégique pour Techpath, captivant l'essence de notre entreprise et offrant aux visiteurs une première impression percutante de notre expertise technologique et de nos solutions innovantes.",
    },
  ];
  const handleContainerWheel = (event: WheelEvent) => {
    if (worksCardsContainerRef.current) {
      const container = worksCardsContainerRef.current;

      // Détecter la direction du scroll
      scrollingDownRef.current = event.deltaY > 0;

      // Si le bas du conteneur est atteint et on scroll vers le bas
      if (
        scrollingDownRef.current &&
        container.scrollTop + container.clientHeight >=
          container.scrollHeight - 1
      ) {
        container.style.overflowY = 'hidden';
        document.body.style.overflow = 'scroll';
      }
      // Si le haut du conteneur est atteint et on scroll vers le haut
      if (!scrollingDownRef.current && container.scrollTop === 0) {
        container.style.overflowY = 'hidden';
        document.body.style.overflow = 'scroll';
      }
    }
  };
  const handleWindowScroll = () => {
    if (
      worksCardsContainerRef.current &&
      !coolDownRef.current &&
      worksCardsContainerRef.current.children[1]
    ) {
      const container = worksCardsContainerRef.current;
      const firstCard = container.children[0];
      const firstCardRect = firstCard.getBoundingClientRect();
      const lastCard = container.children[works.length - 1];
      const lastCardRect = lastCard.getBoundingClientRect();

      if (
        firstCardRect.top <= 100 &&
        lastCardRect.bottom > window.innerHeight
      ) {
        container.style.overflowY = 'scroll';
        document.body.style.overflow = 'hidden';
        // Set a cooldown to prevent changes
        coolDownRef.current = true;

        // Calculate the scroll position to center the container
        const offset = (window.innerHeight - container.clientHeight) / 2;
        window.scrollTo({
          top: firstCardRect.top + window.scrollY - offset - 50,
          behavior: 'smooth',
        });

        setTimeout(() => {
          coolDownRef.current = false;
        }, 300);
      } else {
        container.style.overflowY = 'hidden';
        document.body.style.overflow = 'scroll';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll, { passive: true });

    worksCardsContainerRef.current?.addEventListener(
      'wheel',
      handleContainerWheel,
      { passive: true }
    );

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
      worksCardsContainerRef.current?.removeEventListener(
        'wheel',
        handleContainerWheel
      );
    };
  }, []);

  //   useEffect(() => {
  //     if (clickToContact) {
  //       setTimeout(() => {
  //         const pageHeight = document.documentElement.scrollHeight;
  //         const windowHeight = window.innerHeight;

  //         // Forcer le défilement vers le bas en ajustant le scrollTop de <html>
  //         document.documentElement.scrollTop = pageHeight - windowHeight - 1100;

  //         // Utiliser window.scrollTo avec scrollBehavior: 'smooth'
  //         window.scrollTo({
  //           top: pageHeight - windowHeight,
  //           behavior: 'smooth',
  //         });
  //         updateClickToContact(false);
  //       }, 3000);
  //     }
  //   }, [clickToContact]);

  return (
    <div
      style={{ zIndex: 3 }}
      id="projects"
      ref={worksCardsContainerRef}
      className=" h-screen mt-[5rem] relative"
    >
      {works.map((work) => (
        <OneCardWork key={work.id} work={work} />
      ))}
    </div>
  );
}

export default CardsWorkContainer;
