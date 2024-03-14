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

type MediaType = {
  id: number;
  name_En: string;
  name_Ar: string;
  activeState: boolean;
};

type EgazaCategories = {
  id: number;
  name_En: string;
  name_Ar: string;
};
type EgazaSubcategories = {
  id: number;
  name_En: string;
  name_Ar: string;
};
type EgazaSheikh = {
  id: number;
  name_En: string;
  name_Ar: string;
};

type LiveStreamResponse = {
  id: number;
  title_En: string;
  title_Ar: string;
  time: string;
  description_En: string;
  description_Ar: string;
  bannerUrl: string;
  youtubeUrl: string;
  facebookUrl: string;
  activeState: boolean;
};

type PrivateFileResponse = {
  id: number;
  title_En: string;
  title_Ar: string;
  description_En: string;
  description_Ar: string;
  lock: boolean;
  activeState: boolean;
  orderIndex: number;
  topList: boolean;
  bannerUrl1: string;
  bannerUrl2: string;
  bannerUrl3: string;
  bannerUrl4: string;
  bannerUrl5: string;
  bannerUrl6: string;
  bannerUrl7: string;
  bannerUrl8: string;
  bannerUrl9: string;
  mainBanner: string;
  bannerGo_1: string;
  bannerGo_2: string;
  bannerGo_3: string;
  bannerGo_4: string;
  bannerGo_5: string;
  bannerGo_6: string;
  bannerGo_7: string;
  bannerGo_8: string;
  bannerGo_9: string;
};

type EventResponse = {
  id: number;
  title_En: string;
  title_Ar: string;
  description_En: string;
  description_Ar: string;
  eventStartDate: string;
  eventEndDate: string;
  lock: boolean;
  activeState: boolean;
  orderIndex: number;
  topList: boolean;
  bannerUrl: string;
  eventAudios: {
    id: number;
    title_En: string;
    title_Ar: string;
    description_En: string;
    description_Ar: string;
    path: string;
  }[];
  eventVideos: {
    id: number;
    title_En: string;
    title_Ar: string;
    description_En: string;
    description_Ar: string;
    path: string;
  }[];
  eventPhotos: {
    id: number;
    title_En: string;
    title_Ar: string;
    path: string;
    eventId: number;
    event_En: string;
    event_Ar: string;
    activeState: boolean;
    topList: boolean;
    fromEvent: boolean;
  }[];
  banner: string;
};

type BooksResponse = {
  id: number;
  title_En: string;
  title_Ar: string;
  description_En: string;
  description_Ar: string;
  path: string;
  bannerUrl: string;
  author: string;
  size: string;
  activeState: boolean;
  views: number;
  topList: boolean;
  bookFile: string;
  banner: string;
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
