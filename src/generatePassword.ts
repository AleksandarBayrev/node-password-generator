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
    })
}

export const generatePassword = async (config: Config) => {
    const result: Promise<string>[] = [];

    for (let i = 0; i < config.length; i++) {
        result.push(getSymbol(config));
    }

    return (await Promise.all(result)).join("");
}