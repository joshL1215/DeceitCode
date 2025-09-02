import { useState } from "react";

const LEFT_PANEL_STYLE = "flex flex-col items-center bg-[#f0ededff] rounded-lg shadow overflow-hidden";
const NAV_STYLE = "flex bg-[#e0d9d9ff] shadow-md w-full overflow-hidden"
const BUTTON_STYLE = "flex-1 h-full w-auto px-4"

function ProblemPanel() {

    const [leftPanelTab, setLeftPanelTab] = useState("Problem");
    const getFullStyle = (thisTab: string) => `${BUTTON_STYLE} ${thisTab === leftPanelTab ? "text-black font-semibold" : "hover:text-[#aa8c8c]"}`

    return (
        <div className={`${LEFT_PANEL_STYLE} flex-1`}>
            <div className={`${NAV_STYLE} h-10`}>
                <button className={getFullStyle("Problem")} onClick={() => setLeftPanelTab("Problem")}>
                    Problem
                </button>
                <button className={`${getFullStyle("Run")} border-x border-x-gray-300`} onClick={() => setLeftPanelTab("Run")}>
                    Run
                </button>
                <button className={getFullStyle("Submit")} onClick={() => setLeftPanelTab("Submit")}>
                    Submit
                </button>
            </div>
            <div className='flex flex-row flex-1 w-full p-2'>
                <div className='text-smoverflow-y-scroll h-full w-full'>
                    <pre className="whitespace-pre-wrap break-words">
                        {`Solve the following problem: \n\nYou have an array, denoted as nums, of integers and you have a target integer\n\nReturn two indices so that nums[one index] + nums[another index] is equal to the target integer and the two indices are not equal\n\nReturn the smaller index first.`}
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default ProblemPanel;
