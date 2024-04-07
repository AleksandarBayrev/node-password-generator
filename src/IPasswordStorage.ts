import { SaveResult } from "./types";

export interface IPasswordStorage {
    tryAddPassword(password: string): void;
    trySaveToFile(): Promise<SaveResult>;
}