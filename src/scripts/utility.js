

export function removeTrailingComma(item) {
	if (item.innerText.slice(-1) === ",") item.innerText = item.innerText.slice(0, -1)
}