import { ObjectId } from "mongoose";

export interface UserToken {
    id: ObjectId;
    role: string;
    iat: number;
}

declare global {
    namespace Express {
        export interface Request {
            user: UserToken;
        }
        export interface Response {
            user: UserToken;
        }
    }
}
