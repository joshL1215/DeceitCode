import { useEffect, useState } from "react";
import ProblemDisplay from "./ProblemDisplay";
import RunDisplay from "./RunDisplay";
import SubmitDisplay from "./SubmitDisplay";

const LEFT_PANEL_STYLE = "flex flex-col items-center bg-[#f0ededff] rounded-lg shadow overflow-hidden";
const NAV_STYLE = "flex bg-[#e0d9d9ff] shadow-md w-full overflow-hidden"
const BUTTON_STYLE = "flex-1 h-full w-auto px-4"

function ProblemPanel({ slug }: { slug: string }) {

    const [leftPanelTab, setLeftPanelTab] = useState("ProblemTab");
    const getFullStyle = (thisTab: string) => `${BUTTON_STYLE} ${thisTab === leftPanelTab ? "text-black font-semibold" : "hover:text-[#aa8c8c]"}`

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

    const [problem, setProblem] = useState<Problem | null>(null);
    useEffect(() => {
        const fetchProblem = async () => {
            const fetchedProblem = await fetch(`http://localhost:5000/problems/${slug}`);
            const jsonifiedProblem = await fetchedProblem.json();
            setProblem(jsonifiedProblem);
        };
        fetchProblem();
    }, []);

    return (
        <div className={`${LEFT_PANEL_STYLE} flex-1`}>
            <div className={`${NAV_STYLE} h-10`}>
                <button className={getFullStyle("ProblemTab")} onClick={() => setLeftPanelTab("ProblemTab")}>
                    Problem
                </button>
                <button className={`${getFullStyle("RunTab")} border-x border-x-gray-300`} onClick={() => setLeftPanelTab("RunTab")}>
                    Run
                </button>
                <button className={getFullStyle("SubmitTab")} onClick={() => setLeftPanelTab("SubmitTab")}>
                    Submit
                </button>
            </div>
            <div className='flex flex-row flex-1 w-full p-2'>
                <div className='text-sm overflow-y-scroll colored-scrollbar h-full w-full'>
                    {leftPanelTab === "ProblemTab" && <ProblemDisplay problem={problem} />}
                    {leftPanelTab === "RunTab" && <RunDisplay problem={problem} />}
                    {leftPanelTab === "SubmitTab" && <SubmitDisplay problem={problem} />}
                </div>
            </div>
        </div>
    )
}

export default ProblemPanel;
