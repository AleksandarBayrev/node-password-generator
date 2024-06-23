import { workerData } from "worker_threads";
import { Config } from "./types";

const getRandomIntInclusive = (min: number, max: number) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const config: Config = JSON.parse(workerData.config);

const possibleSymbols = config?.possibleSymbols ?? [];

if (config?.useNumbers) {
    for (let i = 0; i < 10; i++) {
        possibleSymbols.push(i.toString());
    }
}

if (config?.useCapitalLetters) {
    for (let i  = 65; i <= 90; i++) {
        possibleSymbols.push(String.fromCharCode(i));
    }
}

if (config?.useLowercaseLetters) {
    for (let i  = 97; i <= 122; i++) {
        possibleSymbols.push(String.fromCharCode(i));
    }
}
export const getSymbol = () => {
    return possibleSymbols[getRandomIntInclusive(0, possibleSymbols.length - 1)];
}