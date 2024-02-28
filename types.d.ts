type SettingsResponse = {
  id: number;
  homeBanner: string;
  newsBanner: string;
  fatwasBanner: string;
  askFatwaBanner: string;
  visualsBanner: string;
  audiosBanner: string;
  articlesBanner: string;
  booksBanner: string;
  privateFilesBanner: string;
  egazaBanner: string;
  donateBanner: string;
  eventsBanner: string;
  foodParcelBanner: string;
  prayWithMeBanner: string;
};

type ArticleResponse = {
  id: number;
  title_En: string;
  title_Ar: string;
  description_En: string;
  description_Ar: string;
  contents_En: string;
  contents_Ar: string;
  bannerUrl: string;
  createdDate: string;
  author: string;
  privateFileId: number;
  privateFile_Ar: string;
  privateFile_En: string;
  activeState: boolean;
  views: number;
  topList: boolean;
};
