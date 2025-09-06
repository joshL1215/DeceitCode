import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../state/store";

type Case = {
    input: string;
    expectedOutput: string;
}

interface JudgeButtonProps {
    slug: string;
    language: string;
    cases: Case[];
    label: string;
    mode: string;
    onResult: (result: SubmissionResult) => void;
}

type CaseResult = {
    returned: string,
    res: string,
}

export type SubmissionResult = CaseResult[]

const JudgeButton: React.FC<JudgeButtonProps> = ({ slug, language, cases, label, mode, onResult }) => {
    const [loading, setLoading] = useState(false);

    const code = useSelector((state: RootState) => state.code.content);

    const handleClick = async () => {
        setLoading(true);

        try {
            const response = await fetch(`http://localhost:5000/problems/judge/${slug}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    slug,
                    language,
                    code,
                    cases,
                    mode,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error Status: ${response.status}`);
            }

            const result: SubmissionResult = await response.json();
            onResult(result)

            console.log("Success:", result);
        } catch (err: any) {
            console.log("Error:", err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button
                className="w-65 h-15 bg-[#a1b595] hover:bg-[#7C996E] font-semibold rounded-2xl"
                onClick={handleClick}
                disabled={loading}
            >
                {loading ? "Processing..." : label}
            </button>
        </div>
    );
};

export default JudgeButton;
