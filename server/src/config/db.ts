import mongoose from "mongoose"
import { MONGO_URI } from "../constants/env.js";

const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URI);

    }
    
    catch (error) {
        console.log("Error connecting to the db ", error);
        process.exit(1);

    }
}

export default connectDb;