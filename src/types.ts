export type Config = {
    length: number;
    numberOfPasswords: number;
    storageType: StorageType;
    possibleSymbols: string[];
    useNumbers: boolean;
    useCapitalLetters: boolean;
    useLowercaseLetters: boolean;
}
export type SaveResult = {
    saved: boolean;
    filename: string;
}
export enum StorageType {
    ConsoleOnly = 0,
    FileOnly = 1,
    FileAndConsole = 2
}
export type GetConfigFunction = () => Promise<Config>;