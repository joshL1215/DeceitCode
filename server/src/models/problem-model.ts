import mongoose from "mongoose";
import { string } from "zod";

interface Case {
    input: string;
    expectedOutput: string;
}

const caseSchema = new mongoose.Schema<Case>({
    input: {type : String},
    expectedOutput: {type : String},
});

export interface ProblemDoc extends mongoose.Document {
    problemId: mongoose.Types.ObjectId;
    title: string;
    description: string;
    prelimCases: Case[];
    testCases: Case[]; 
}

const problemSchema = new mongoose.Schema<ProblemDoc>({
    problemId: {
        ref: "Problem",
        type: mongoose.Schema.Types.ObjectId,
        index: true,
    },
    title: {type : String},
    description: {type : String},
    prelimCases: [caseSchema],
    testCases: [caseSchema],
});

export default mongoose.model<ProblemDoc>("Problem", problemSchema);