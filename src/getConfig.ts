import { Config, GetConfigFunction } from "./types";
import fs from "fs/promises";
import path from "path";

export const getConfig: GetConfigFunction = async () => {
    const config = JSON.parse((await fs.readFile(path.join(__dirname, "config.json"))).toString()) as Config;
    if (!Object.keys(config).every((x: keyof Config) => typeof config[x] !== "undefined")) {
        throw new Error("Invalid app config! Please check config.json for the propertis: `numberOfPasswords`, `length`, `storageType`");
    }
    if (config.length < 1) {
        throw new Error("Invalid app config! `length` should be at least 1");
    }
    if (config.numberOfPasswords < 1) {
        throw new Error("Invalid app config! `numberOfPasswords` should be at least 1");
    }
    return config;
}