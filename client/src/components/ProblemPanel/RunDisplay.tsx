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
    return (
        <div className="flex flex-column justify-center">
            <button className="w-20 h-20 bg-green-600 rounded shadow">Run</button>
        </div>

    )
}

export default RunDisplay;

