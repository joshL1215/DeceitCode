import ProblemModel from "../models/problem-model.js";

export const fetchProb = async (slug: string) => {
    
    const problem = await ProblemModel.findOne({slug}).select('-_id').lean();

    if (!problem) {
        throw new Error(`No problem exists under slug: ${slug}`);
    }

    return problem;
}

export const fetchAllProbs = async () => {

    const problems = await ProblemModel
    .find()
    .select("slug title difficulty")
    .lean();

    if (!problems) {
        throw new Error('The problem database is completely empty');
    }

    return problems;
}