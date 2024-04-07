import { Config } from "./types";
import { getSymbol } from "./getSymbol";

export const generatePassword = (config: Config) => {
    const result: string[] = [];
    for (let i = 0; i < config.length; i++) {
        result.push(getSymbol());
    }
    return result.join("");
}