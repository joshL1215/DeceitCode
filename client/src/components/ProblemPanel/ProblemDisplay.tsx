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

function ProblemDisplay({ problem }: { problem: Problem | null }) {
    return (
        <div className="h-full">
            <pre className="whitespace-pre-wrap break-words">
                {problem ? problem.description : "Loading problem..."}
            </pre>
        </div>

    )
}

export default ProblemDisplay;

