export default function useFilter(activeIndex: number, data: any[]) {
  switch (activeIndex) {
    case 0:
      return filterByNewest(data);
    case 1:
      return filterByViews(data);
    case 2:
      return filterByPopular(data);
    case 3:
      return filterByAlphabet(data);
    default:
      return data;
  }
}

function filterByNewest(data: any[]) {
  return data.slice().sort((a, b) => {
    const dateA = Date.parse(a.createdDate);
    const dateB = Date.parse(b.createdDate);
    return dateB - dateA;
  });
}

function filterByViews(data: any[]) {
  return data.slice().sort((a, b) => b.views - a.views);
}

function filterByPopular(data: any[]) {
  return data.slice().sort((a, b) => {
    if (a.topList && !b.topList) {
      return -1;
    } else if (!a.topList && b.topList) {
      return 1;
    } else {
      return b.views - a.views;
    }
  });
}

function filterByAlphabet(data: any[]) {
  return data.slice().sort((a, b) => {
    const titleA = a.title_En.toLowerCase();
    const titleB = b.title_En.toLowerCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  });
}
