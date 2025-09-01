import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface UserDoc extends mongoose.Document {
    username: string;
    password: string;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;
    comparePass(val: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserDoc>({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    verified: {type: Boolean, required: true, default: false}},
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next){ 
    if (!this.isModified("password")) {
        return;
    }
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds)
}); 

userSchema.methods.comparePass = async function (val: string) {
    return await bcrypt.compare(val, this.password);
}

export default mongoose.model<UserDoc>("User", userSchema);
