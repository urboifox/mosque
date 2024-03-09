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

type Fatwa = {
  id: number;
  title_En: string;
  title_Ar: string;
  description_En: string;
  description_Ar: string;
  question_En: string;
  question_Ar: string;
  email: string;
  age: number;
  city: string;
  answer_Ar: string;
  answer_En: string;
  createdDate: string;
  answerAuthor: string;
  gender: string;
  privateFileId: number;
  privateFile_Ar: string;
  privateFile_En: string;
  threadId: number;
  thread_Ar: string;
  thread_En: string;
  activeState: boolean;
  views: number;
  topList: boolean;
};

type NewsResponse = {
  id: number;
  title_En: string;
  title_Ar: string;
  time: string;
  description_En: string;
  description_Ar: string;
  contents_En: string;
  contents_Ar: string;
  bannerUrl: string;
  createdDate: string;
  author: string;
  newsTypeId: number;
  newsType_Ar: string;
  newsType_En: string;
  activeState: boolean;
  views: number;
  topList: boolean;
};

type FatwasResponse = Fatwa[];

type NewsTypesResponse = {
  id: number;
  name_En: string;
  name_Ar: string;
  activeState: boolean;
};

type PrayerTimesResponse = {
  code: number;
  status: string;
  data: {
    timings: {
      Fajr: string;
      Sunrise: string;
      Dhuhr: string;
      Asr: string;
      Sunset: string;
      Maghrib: string;
      Isha: string;
      Imsak: string;
      Midnight: string;
      Firstthird: string;
      Lastthird: string;
    };
    date: {
      readable: string;
      timestamp: string;
      hijri: any;
      gregorian: any;
    };
    meta: {
      latitude: number;
      longitude: number;
      timezone: string;
      method: string;
      latitudeAdjustmentMethod: string;
      midnightMode: string;
      school: string;
      offset: any;
    };
  };
};
