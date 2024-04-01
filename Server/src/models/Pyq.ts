import { model, Schema, Document } from "mongoose";

interface PYQ extends Document {
    Branch: string;
    Semester: number;
    Role: string;
}

const PyqSchema = new Schema<PYQ>({
    Branch: {
        type: String,
        required: true
    },
    Semester: {
        type: Number,
        required: true
    },
    Role: {
        type: String,
        required: true
    }
}, { collection: "PYQ" }); // Specify the collection name as "PYQ"

export const PyqModel = model<PYQ>("PYQ", PyqSchema); // Use "PYQ" as both model name and collection name
