import _format from "date-fns/format";
import _compareDesc from "date-fns/compareDesc";
import _isFuture from "date-fns/isFuture";

export const getTimestamp = (date: Date) => {
  return new Date(date).getTime() / 1000;
};

export const formatDate = (
  date: Date | number,
  pattern: string,
  options?: Parameters<typeof _format>[2]
) => {
  return _format(date, pattern, options);
};

export const isFuture = (date: number | string | null) => {
  return _isFuture(new Date(date || ""));
};
