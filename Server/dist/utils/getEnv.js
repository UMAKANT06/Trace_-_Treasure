var _a, _b;
import dotenv from 'dotenv';
dotenv.config();
export const MONGO_URL = (_a = process.env.MONGO_URI) !== null && _a !== void 0 ? _a : "";
export const PORT = (_b = process.env.PORT) !== null && _b !== void 0 ? _b : 6001;
const checkEnvVariable = (variable, name) => {
    if (!variable || variable.trim() === "") {
        throw new Error(`Environment variable '${name}' is missing or empty.`);
    }
};
checkEnvVariable(MONGO_URL, "MONGO_URL");
//# sourceMappingURL=getEnv.js.map