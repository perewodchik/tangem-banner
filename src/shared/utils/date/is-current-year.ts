import { isThisYear } from 'date-fns';

export const isCurrentYear = (year: number) => {
  const date = new Date(year, 0, 0);
  console.log(date);
  return isThisYear(date);
};
