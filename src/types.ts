export type Config = {
    length: number;
    numberOfPasswords: number;
    saveToFile: boolean;
}
export type SaveResult = {
    saved: boolean;
    filename: string;
}
export type GetConfigFunction = () => Promise<Config>;