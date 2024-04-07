import path from "path";
import { IPasswordStorage } from "./IPasswordStorage";
import { Config, SaveResult } from "./types";
import fs from "fs";

export class PasswordStorage implements IPasswordStorage {
    private readonly passwords: string[];
    private readonly filename: string;
    constructor(
        private readonly config: Config
    ) {
        this.passwords = [];
        this.filename = this.generateFilename();
    }
    tryAddPassword(password: string): void {
        if (this.config.saveToFile) {
            this.passwords.push(password);
        }
    }
    async trySaveToFile(): Promise<SaveResult> {
        if (this.config.saveToFile) {
            fs.writeFileSync(this.filename, this.passwords.join("\n"));
            return {
                saved: await fs.existsSync(path.join(__dirname, this.filename)),
                filename: this.filename
            }
        }
        return {
            saved: false,
            filename: ''
        }
    }
    private generateFilename() {
        let date = new Date().toISOString();
        while (date.includes("-")) {
            date = date.replace("-", "");
        }
        while (date.includes(":")) {
            date = date.replace(":", "");
        }
        while (date.includes("T")) {
            date = date.replace("T", "");
        }
        while (date.includes("Z")) {
            date = date.replace("Z", "");
        }
        while (date.includes(".")) {
            date = date.replace(".", "");
        }
        return `saved-passwords-${date}.txt`;
    }
}