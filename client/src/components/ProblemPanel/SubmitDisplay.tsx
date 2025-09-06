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

function SubmitDisplay({ problem }: { problem: Problem | null }) {

    if (!problem) {
        return (
            <div>
                Loading cases...
            </div>
        )
    }

    const cases = problem.testCases

    return (
        <div className="flex flex-col items-center justify-center p-1">
            <button className="w-65 h-15 bg-[#a1b595] hover:bg-[#7C996E] font-semibold rounded-2xl">
                Submit
            </button>

            {/* Test case results */}
            <div className="flex flex-col text-lg gap-2 w-full py-2">
                {cases.map(cases => (
                    <div className="border rounded p-1">
                        <p>Test case: {cases.input}</p>
                        <p>Expected: {cases.expectedOutput}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default SubmitDisplay;

