import { parentPort } from "worker_threads";
import { getSymbol } from "./getSymbol";
(() => {
    if (!parentPort) {
        console.error("Script should not be called directly, or incorrect usage!");
        return;
    }
    parentPort.postMessage({symbol: getSymbol()});
})();