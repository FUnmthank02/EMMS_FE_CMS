import moment from 'moment';

export const removeLocalStorage = () => {
  const IS_SERVER = typeof window === 'undefined';

  if (!IS_SERVER) {
    localStorage.clear();
  }
};

export const getLocalStorage = (itemStorage: string) => {
  const IS_SERVER = typeof window === 'undefined';

  if (!IS_SERVER) {
    return localStorage.getItem(itemStorage);
  }
};

export const setLocalStorage = (itemStorage: string, data: string) => {
  const IS_SERVER = typeof window === 'undefined';

  if (!IS_SERVER) {
    localStorage.setItem(itemStorage, data);
  }
};

export const getTimeAgo = (createdAt: Date) => {
  const timeAgo = Date.now() - new Date(createdAt).getTime();
  let unit;
  if (timeAgo < 60000) {
    unit = 'just now';
  } else if (timeAgo < 3600000) {
    unit =
      Math.floor(timeAgo / 60000) + ` ${Math.floor(timeAgo / 60000) === 1 ? 'minute' : 'minutes'}`;
  } else if (timeAgo < 86400000) {
    unit =
      Math.floor(timeAgo / 3600000) + ` ${Math.floor(timeAgo / 3600000) === 1 ? 'hour' : 'hours'}`;
  } else if (timeAgo < 604800000) {
    unit =
      Math.floor(timeAgo / 86400000) + ` ${Math.floor(timeAgo / 86400000) === 1 ? 'day' : 'days'}`;
  } else if (timeAgo < 2592000000) {
    unit =
      Math.floor(timeAgo / 604800000) +
      ` ${Math.floor(timeAgo / 604800000) === 1 ? 'week' : 'weeks'}`;
  } else if (timeAgo < 31536000000) {
    unit =
      Math.floor(timeAgo / 2592000000) +
      ` ${Math.floor(timeAgo / 2592000000) === 1 ? 'month' : 'months'}`;
  } else {
    unit =
      Math.floor(timeAgo / 31536000000) +
      ` ${Math.floor(timeAgo / 31536000000) === 1 ? 'year' : 'years'}`;
  }
  return unit;
};

export const getDateWithFormat = (createdAt: string) => {
  const formattedDate = moment(createdAt).format('MMMM D, YYYY');
  return formattedDate;
};

export const handleValidateString = (text: string) => {
  if (!text || text.trim().length === 0) return false;
  return true;
};

export const getTimeFromTimestamp = (timestamp: number): string => {
  const databaseTime = new Date(timestamp);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(databaseTime);

  return formattedTime;
};

export const getSpaceBodyAppLayout = (curWidth: number): string => {
  if (curWidth <= 768 && curWidth > 600) {
    return "80px";
  } else if (curWidth <= 600) {
    return "0px";
  }
  return "270px";
};

export const getMaxHeightTextCreatePost = (curWidth: number): number => {
  if (curWidth <= 768 && curWidth > 600) {
    return 150;
  } else if (curWidth <= 600) {
    return 100;
  }
  return 470;
};

export const getMinWidthFormEditProfile = (curWidth: number): number => {
  if (curWidth <= 768 && curWidth >= 600) {
    return 350;
  } else if (curWidth < 600) {
    return 200;
  }
  return 600;
};


