import dotenv from 'dotenv';

dotenv.config();

export const MONGO_URL = process.env.MONGO_URI?? "";
export const PORT = process.env.PORT ?? 6001;

const checkEnvVariable = (variable: any, name: string): void => {
    if (!variable || variable.trim() === "") {
        throw new Error(`Environment variable '${name}' is missing or empty.`);
    }
};
checkEnvVariable(MONGO_URL, "MONGO_URL");
