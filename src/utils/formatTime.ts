import { format } from "date-fns";

export const formatTimeRange = (startTime: Date, endTime: Date) => {
	const startFormatted = format(startTime, "HH:mm do MMM yyyy");
	const endFormatted = format(endTime, "HH:mm do MMM yyyy");

	return `${startFormatted} - ${endFormatted}`;
};

export const formattedDate = (date: string) =>
	`${String(new Date(date).getDate()).padStart(2, "0")}/${String(
		new Date(date).getMonth() + 1,
	).padStart(2, "0")}/${String(new Date(date).getFullYear()).substr(-2)}`;
