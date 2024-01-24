import { format } from 'date-fns';

/**
 * Returns month name based on numerical index
 * @param month 0-11
 * @returns month name
 */
export const getMonthName = (month: number) => {
  const date = new Date(1, month);
  console.log(date);
  return format(date, 'MMMM');
};
