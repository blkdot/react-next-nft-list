import moment from 'moment';

// Make short Contract Address string
export const shortAddr = (addr: any): string => {
  if (addr.length < 10) return addr;
  return `${addr.slice(0, 5)}...${addr.slice(addr.length - 4)}`;
}
// Parse from string to Json object 
export const parseJsonObject = (str: string) => {
  return JSON.parse(str)
}

// Format special date from now using moment 
export const formatDateFromNow = (date: string) => {
  return moment(date).startOf('day').fromNow();
}