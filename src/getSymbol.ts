const getRandomIntInclusive = (min: number, max: number) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const possibleSymbols = [
    "!",
    "#",
    "$",
    "_",
    "-",
    ".",
    "=",
    ":",
    "^"
];

for (let i = 0; i < 10; i++) {
    possibleSymbols.push(i.toString());
}

for (let i  = 65; i <= 90; i++) {
    possibleSymbols.push(String.fromCharCode(i));
}
for (let i  = 97; i <= 122; i++) {
    possibleSymbols.push(String.fromCharCode(i));
}

export const getSymbol = () => {
    return possibleSymbols[getRandomIntInclusive(0, possibleSymbols.length - 1)];
}