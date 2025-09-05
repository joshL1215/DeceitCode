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
    return (
        <div className="flex flex-col items-center justify-center p-3">
            <button className="w-65 h-15 bg-[#a1b595] hover:bg-[#7C996E] font-semibold rounded-2xl">
                Submit
            </button>

            {/* Test case results */}
            <div className="grid grid-cols-2 gap-4">
            </div>
        </div>

    )
}

export default SubmitDisplay;

