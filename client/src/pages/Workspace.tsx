import { useState } from "react";
import TextEditor from "../components/TextEditor";

const LEFT_PANEL_STYLE = "flex justify-center bg-[#DCE0D9] rounded shadow overflow-hidden";
const RIGHT_PANEL_STYLE = "flex justify-center items-center bg-[#DCE0D9] rounded shadow overflow-hidden";
const NAV_STYLE = "flex justify-left bg-[#DCE0D9] rounded shadow h-10 w-full overflow-hidden"
const BUTTON_STYLE = "flex-1 h-full w-auto px-4"

function Workspace() {
    const [leftPanelTab, setLeftPanelTab] = useState("Problem");

    const getFullStyle = (thisTab: string) => `${BUTTON_STYLE} ${thisTab === leftPanelTab ? "bg-gray-400" : "hover:bg-gray-300"}`

    return (
        <div className="flex flex-row justify-center p-3 gap-3 h-full">

            {/* Problem panel */}
            <div className={`${LEFT_PANEL_STYLE} flex-1`}>
                <div className={`${NAV_STYLE} `}>
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
            </div>

            {/* Editor panel */}
            <div className={`${RIGHT_PANEL_STYLE} flex-3 `}>
                <div className={'w-full h-full p-5'}>
                    <TextEditor language='python' starterCode='print(hello world)' />
                </div>
            </div>
        </div >
    );
}

export default Workspace;