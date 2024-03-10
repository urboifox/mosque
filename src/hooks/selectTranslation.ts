export default function selectTranslation(locale: string = "en", data: any) {
  const en = locale === "en";
  const question = en
    ? data.question_En || data.question_Ar
    : data.question_Ar || data.question_En;
  const title = en
    ? data.title_En || data.title_Ar
    : data.title_Ar || data.title_En;
  const answer = en
    ? data.answer_En || data.answer_Ar
    : data.answer_Ar || data.answer_En;
  const contents = en
    ? data.contents_En || data.contents_Ar
    : data.contents_Ar || data.contents_En;
  const privateFile = en
    ? data.privateFile_En || data.privateFile_Ar
    : data.privateFile_Ar || data.privateFile_En;
  const description = en
    ? data.description_En || data.description_Ar
    : data.description_Ar || data.description_En;
  const name = en ? data.name_En || data.name_Ar : data.name_Ar || data.name_En;
  const lecturer = en
    ? data.lecturer_En || data.lecturer_Ar
    : data.lecturer_Ar || data.lecturer_En;
  const series = en
    ? data.series_En || data.series_Ar
    : data.series_Ar || data.series_En;
  const mediaType = en
    ? data.mediaType_En || data.mediaType_Ar
    : data.mediaType_Ar || data.mediaType_En;
  const thread = en
    ? data.thread_En || data.thread_Ar
    : data.thread_Ar || data.thread_En;

  return {
    title,
    name,
    description,
    question,
    answer,
    contents,
    privateFile,
    lecturer,
    series,
    mediaType,
    thread,
  };
}
