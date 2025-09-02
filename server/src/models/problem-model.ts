import mongoose from "mongoose";

interface Case {
    input: string;
    expectedOutput: string;
}

const caseSchema = new mongoose.Schema<Case>({
    input: {type : String},
    expectedOutput: {type : String},
});

export interface ProblemDoc extends mongoose.Document {
    slug: string;
    title: string;
    difficulty: string;
    description: string;
    prelimCases: Case[];
    testCases: Case[]; 
}

const problemSchema = new mongoose.Schema<ProblemDoc>({
    slug: {type: String, unique: true},
    title: {type : String},
    difficulty: {type: String},
    description: {type : String},
    prelimCases: [caseSchema],
    testCases: [caseSchema],
});

export default mongoose.model<ProblemDoc>("Problem", problemSchema);