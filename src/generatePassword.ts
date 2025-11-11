import { Config } from "./types";
import { Worker } from "worker_threads";
const getSymbol = (config: Config): Promise<string> => {
    return new Promise((res, rej) => {
        const worker = new Worker("./generatePasswordWorker", {
            workerData: {
                config: JSON.stringify(config)
            }
        });
        let symbol = "";
        worker.on("message", (data) => {
            symbol = data.symbol;
        });
        worker.on("exit", () => {
            res(symbol);
        });
    });
}

export const generatePassword = async (config: Config) => {
    const result: Promise<string>[] = [];

    for (let i = 0; i < config.length; i++) {
        result.push(getSymbol(config));
    }

    const passwordAsArray: string[] = await Promise.all(result);
    const passwordAsString: string = passwordAsArray.join("");

    console.log(`Generated password: ${passwordAsString}`);

    return passwordAsString;
}