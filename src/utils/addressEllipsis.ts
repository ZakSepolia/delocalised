export function addressEllipsis(address: string, numberToShow = 3): string {
	return `${address.substring(0, numberToShow)}...${address.substring(
		address.length - numberToShow,
	)}`;
}
