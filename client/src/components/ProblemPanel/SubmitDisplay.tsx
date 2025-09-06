import { useState } from "react";
import JudgeButton, { type SubmissionResult } from "./JudgeButton";

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

    const cases = problem.testCases;

    const [results, setResults] = useState<SubmissionResult>([]);

    return (
        <div className="flex flex-col items-center justify-center shadow p-3">
            <div className="flex flex-column justify-center">
                <JudgeButton slug={problem.slug} language="python" cases={problem.testCases} label="Submit" mode="prelim" onResult={setResults} />
                {/* TODO: Expand support past python only */}
            </div>

            {/* Test case results */}
            <div className="flex flex-col text-lg gap-2 w-full py-3">
                {cases.map((cases, i) => (
                    <div key={i} className="flex flex-row justify-between items-center shadow text-lg bg-[#e0d9d9ff] rounded-lg p-2">
                        <div>
                            <p>Test Case {i + 1}</p>
                            <p>Input: {cases.input}</p>
                            <p>Your output: {results[i]?.returned} {results[i]?.res}</p>
                        </div>
                        <div className={`
                            w-1 h-20 rounded shadow
                            ${results[i]?.res === "pass" ? "bg-green-400" : "bg-[#C97A7E]"}`}>
                        </div>
                    </div>
                ))}
            </div>
        </div >

    )
}

export default SubmitDisplay;

