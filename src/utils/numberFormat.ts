import BigNumber from "bignumber.js";

export const numberFormat = (
	value: number | string | BigNumber,
	maxFraction = 2, // Số chữ số lẻ tối đa là 2
) => {
	const opts = {
		maximumFractionDigits: maxFraction,
	};

	let numericValue;
	if (typeof value === "object") {
		numericValue = value.toNumber();
	} else {
		numericValue = Number(value);
	}

	const formattedValue = numericValue.toLocaleString("en-US", opts);

	// Thay đổi dấu phân tách phần nguyên và phần thập phân
	const replacedValue = formattedValue.replace(/[,.]/g, function (match) {
		return match === "," ? "." : ",";
	});

	return `${replacedValue}`;
};

export const formatNumberPrice = (
	value: string | number | BigNumber,
	maxFraction = 2, // Số chữ số lẻ tối đa là 2
): string => {
	return numberFormat(value, maxFraction);
};
