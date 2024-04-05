import fs from "fs/promises";
import path from "path";
import { getSymbol } from "./getSymbol";

(async () => {
    try {
        const config = JSON.parse((await fs.readFile(path.join(__dirname, "config.json"))).toString());
        const result = [];
        if (config.length <= 0) {
            console.log("Invalid configuration, length should be different than 0");
            return;
        }
        for (let i = 0; i < config.length; i++) {
            result.push(getSymbol());
        }
        console.log(`Generated password: ${result.join("")}`);
    } catch (err) {
        console.log(`config.json not found in current directory!`);
    }
})();