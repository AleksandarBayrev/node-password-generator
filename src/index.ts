import { getConfig } from "./getConfig";
import { generatePassword } from "./generatePassword";
import { IPasswordStorage } from "./IPasswordStorage";
import { PasswordStorage } from "./PasswordStorage";
import { StorageType } from "./types";
(async () => {
    try {
        const config = await getConfig();
        const passwordStorage: IPasswordStorage = new PasswordStorage(config);
        const passwords: Promise<string>[] = [];
        const startDate = new Date();
        const mode = Object.keys(StorageType).find((x: string) => StorageType[x as any] === config.storageType as any);
        console.log(`Started generating passwords at ${startDate.toLocaleDateString()} ${startDate.toLocaleTimeString()} in mode = ${mode}`);
        for (let i = 0; i < config.numberOfPasswords; i++) {
            passwords.push(generatePassword(config));
        }
        const generatedPasswords = await Promise.all(passwords);
        for (let i = 0; i < generatedPasswords.length; i++) {
            const password = generatedPasswords[i];
            passwordStorage.tryAddPassword(password);
            if (config.storageType !== StorageType.FileOnly) {
                console.log(`Generated password: ${password}`);
            }
        }
        const saveResult = await passwordStorage.trySaveToFile();
        const endDate = new Date();
        console.log(`Time taken = ${endDate.getTime() - startDate.getTime()}ms`);
        if (saveResult.saved) {
            console.log(`Passwords saved to file: ${saveResult.filename}`);
        }
    } catch (err) {
        const castedError = err as Error;
        console.log(castedError.message);
    }
})();