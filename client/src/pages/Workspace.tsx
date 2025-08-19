import { useState } from "react";
import TextEditor from "../components/TextEditor";

const LEFT_PANEL_STYLE = "flex flex-col items-center bg-[#DCE0D9] rounded-lg shadow overflow-hidden";
const RIGHT_PANEL_STYLE = "flex flex-col items-center bg-[#DCE0D9] rounded-lg shadow overflow-hidden";
const NAV_STYLE = "flex bg-[#DCE0D9] shadow w-full overflow-hidden"
const BUTTON_STYLE = "flex-1 h-full w-auto px-4"

function Workspace() {
    const [leftPanelTab, setLeftPanelTab] = useState("Problem");

    const getFullStyle = (thisTab: string) => `${BUTTON_STYLE} ${thisTab === leftPanelTab ? "text-black font-semibold" : "hover:text-[#aa8c8c]"}`

    return (
        <div className="flex flex-row justify-center p-3 gap-3 h-screen">

            {/* Problem panel */}
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

                <div className='flex-1 w-full p-2'>
                    <div className='overflow-y-scroll h-full w-full'>
                        <p className="text-6xl break-all"></p>
                    </div>
                </div>


            </div>

            {/* Editor panel */}
            <div className={`${RIGHT_PANEL_STYLE} flex-3`}>
                <div className={`${NAV_STYLE} h-10 flex items-center justify-between p-4 font-semibold`}>
                    <div className={'flex flex-row gap-5'}>
                        <p>Code</p>
                        <select className="focus:outline-none">
                            <option value="option1">Python</option>
                            <option value="option2">JavaScript</option>
                            <option value="option3">C++</option>
                        </select>
                    </div>

                    <button>
                        Reset
                    </button>

                </div>
                <div className={'flex-1 w-full py-2'}>
                    <TextEditor language='python' starterCode='print(hello world)' />
                </div>
            </div>
        </div >
    );
}

export default Workspace;