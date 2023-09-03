type IProjectDatas = {
  mockup: string;
  description: string;
  subDescription: string | null;
  year: string;
  link: string;
  videos: string[] | null;
  stacks: string[];
  images: string[] | null;
};

type IOneProjectCard = {
  id: number;
  companyName: string;
  stacks: string[];
  img: string;
  description: string;
};

export type { IProjectDatas, IOneProjectCard };
