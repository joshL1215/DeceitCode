import JudgeButton from "./JudgeButton";

type Case = {
    input: string;
    expectedOutput: string;
}

type Problem = {
    slug: string;
    title: string;
    difficulty: string;
    description: string;
    prelimCases: Case[];
    testCases: Case[];
};

function RunDisplay({ problem }: { problem: Problem | null }) {
    if (!problem) return null;

    return (
        <div className="flex flex-column justify-center">
            <JudgeButton slug={problem.slug} language="python" cases={problem.prelimCases} label="Run" mode="prelim" />
            {/* TODO: Expand support past python only */}
        </div>

    )
}

export default RunDisplay;

