/* eslint-disable import/no-extraneous-dependencies */
import opxDashboard from '@assets/img/opx_dashboard.png';
import drapo from '@assets/img/drapo.png';
import drapo_solution from '@assets/img/drapo_solution.png';
import remi_blanchet from '@assets/img/remi_blanchet.png';
import valentine_bouvet from '@assets/img/valentine_bouvet.png';
import techpath from '@assets/img/techpath.png';
import {
  drapoMockupMacbook,
  drapoSolutionMockup,
  opxMockupMacbook,
  opxSmallImg1,
  opxSmallImg2,
  opxSmallImg3,
  hand_one,
  hand_two,
  hand_three,
  hand_four,
  hand_five,
  hand_six,
  hand_seven,
  hand_height,
  hand_one_dark,
  hand_two_dark,
  hand_three_dark,
  hand_four_dark,
  hand_five_dark,
  hand_six_dark,
  hand_seven_dark,
  hand_height_dark,
  remiBlanchetMockUp,
  valentineBouvetMockUp,
  techpathMockup,
} from '@assets/img/image';
import {
  drapoSolutionLandingPage,
  landingPageDrapo,
  remiBlanchet,
  simulationDrapo,
  valentineBouvet,
} from '@assets/video/video';
import { TFunction } from 'i18next';

const projectsCardsData = [
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

const opxDatas = (t: TFunction) => {
  return {
    mockup: opxMockupMacbook,
    images: [opxSmallImg1, opxSmallImg2, opxSmallImg3],
    description: t('opx_description'),
    subDescription: null,
    videos: null,
    link: 'https://www.opx.co/',
    year: '2023',
    stacks: ['ReactJs', 'Typescript'],
  };
};

const drapoDatas = (t: TFunction) => {
  return {
    mockup: drapoMockupMacbook,
    images: null,
    description: t('drapo_description'),
    subDescription: t('drapo_subdescription'),
    year: '2021/2022',
    link: 'https://www.drapo.com/',
    videos: [landingPageDrapo, simulationDrapo],
    stacks: ['ReactJs', 'Typescript'],
  };
};

const drapoSolutionDatas = (t: TFunction) => {
  return {
    mockup: drapoSolutionMockup,
    images: null,
    description: t('drapo_solution_description'),
    subDescription: null,
    videos: [drapoSolutionLandingPage],
    link: 'https://solutions.drapo.com/',
    year: '2022',
    stacks: ['ReactJs', 'Typescript', 'Gatsby'],
  };
};

const remiBlanchetDatas = (t: TFunction) => {
  return {
    mockup: remiBlanchetMockUp,
    images: null,
    link: 'https://remiblanchet.fr/',
    description: t('remi_blanchet_description'),
    subDescription: null,
    videos: [remiBlanchet],
    year: '2021',
    stacks: ['Shopify'],
  };
};

const valentineBouvetDatas = (t: TFunction) => {
  return {
    mockup: valentineBouvetMockUp,
    images: null,
    videos: [valentineBouvet],
    link: 'https://www.valentinebouvet.com/',
    description: t('valentine_bouvet_description'),
    subDescription: null,
    year: '2022',
    stacks: ['Shopify'],
  };
};

const TechpathDatas = (t: TFunction) => {
  return {
    mockup: techpathMockup,
    images: null,
    videos: null,
    link: 'https://www.techpath.click/',
    description: t('techpath_description'),
    subDescription: null,
    year: '2022',
    stacks: ['Wordpress', 'Figma', 'PHP'],
  };
};

const bannerWords = [
  { id: 0, title: 'EXPERTISE' },
  { id: 1, title: 'REACT' },
  { id: 2, title: 'FRONT' },
  { id: 3, title: 'UX' },
  { id: 4, title: 'TYPESCRIPT' },
  { id: 5, title: 'SEO' },
  { id: 6, title: 'DEVELOPMENT' },
  { id: 7, title: 'CSS' },
  { id: 8, title: 'TAILWIND' },
  { id: 9, title: 'NEXT.JS' },
  { id: 10, title: 'JAVASCRIPT' },
  { id: 11, title: 'UX' },
  { id: 15, title: 'RESPSONSIVE' },
  { id: 16, title: 'HTML' },
];

const handSvgLightMode = [
  hand_one,
  hand_two,
  hand_three,
  hand_four,
  hand_five,
  hand_six,
  hand_seven,
  hand_height,
  hand_seven,
  hand_six,
  hand_five,
  hand_four,
  hand_three,
  hand_two,
];

const handSvgDarkMode = [
  hand_one_dark,
  hand_two_dark,
  hand_three_dark,
  hand_four_dark,
  hand_five_dark,
  hand_six_dark,
  hand_seven_dark,
  hand_height_dark,
  hand_seven_dark,
  hand_six_dark,
  hand_five_dark,
  hand_four_dark,
  hand_three_dark,
  hand_two_dark,
];

const nav = (t: TFunction) => {
  return [t('nav.home'), t('nav.about'), t('nav.projects'), t('nav.contact')];
};

const skills = (t: TFunction) => {
  return [
    {
      title: t('stacks'),
      skillsArray: [
        'React',
        'Javascript / Typescript',
        'HTML / CSS',
        'NextJS',
        'TailwindCSS',
        'Storybook',
        'Symphony',
        'PHP',
        'GraphQL',
        'PostgreSQL',
      ],
    },
    {
      title: 'Design',
      skillsArray: ['UI Design', 'UX Design', 'Prototypage'],
    },
    {
      title: t('tools'),
      skillsArray: [
        'Figma',
        'VSCode',
        'Postman',
        'Github',
        'Gitlab',
        'Slack',
        'Linear',
        'Notion',
      ],
    },
    {
      title: t('personal'),
      skillsArray: [
        t('curious'),
        t('autonomous'),
        t('creative'),
        t('organized'),
      ],
    },
  ];
};

const colors = ['#B80F6A', '#FC9700', '#0FB87B', '#000000'];

export {
  opxDatas,
  drapoDatas,
  drapoSolutionDatas,
  bannerWords,
  nav,
  colors,
  handSvgLightMode,
  handSvgDarkMode,
  projectsCardsData,
  remiBlanchetDatas,
  valentineBouvetDatas,
  TechpathDatas,
  skills,
};
