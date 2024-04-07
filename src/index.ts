import { getConfig } from "./getConfig";
import { generatePassword } from "./generatePassword";
import { IPasswordStorage } from "./IPasswordStorage";
import { PasswordStorage } from "./PasswordStorage";
(async () => {
    try {
        const config = await getConfig();
        const passwordStorage: IPasswordStorage = new PasswordStorage(config);
        for (let i = 0; i < config.numberOfPasswords; i++) {
            const result = generatePassword(config);
            passwordStorage.tryAddPassword(result);
            console.log(`Generated password: ${result}`);
        }
        const saveResult = await passwordStorage.trySaveToFile();
        if (saveResult.saved) {
            console.log(`Passwords saved to file: ${saveResult.filename}`);
        }
    } catch (err) {
        const castedError = err as Error;
        console.log(castedError.message);
    }
})();