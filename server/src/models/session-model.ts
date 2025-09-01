import mongoose from "mongoose";

export interface SessionDoc extends mongoose.Document {
    userId: mongoose.Types.ObjectId;
    userAgent?: string;
    createdAt: Date;
    expiresAt: Date; 
}

const sessionSchema = new mongoose.Schema<SessionDoc>({
    userId: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId,
        index: true,
    },
    userAgent: {type : String},
    createdAt: {type: Date, required: true, default: Date.now},
    expiresAt: {type: Date, default: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
});

export default mongoose.model<SessionDoc>("Session", sessionSchema);
