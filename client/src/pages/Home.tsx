import siteLogo from "../assets/site-logo.svg"
function Home() {

    return (
        <div className="flex flex-col items-center pt-10 gap-7 h-screen bg-[#f9f8f8]">
            <div>
                <img className="max-h-75" src={siteLogo} />
            </div>
            <h1 className="text-xl font-semibold">A coding challenge platform built to deter AI-based cheating tools</h1>
            <text className="whitespace-pre-wrap max-w-200 text-center">{
                `I built this app to play around with some ideas I had on how cheating with AI/LLM powered tools could be prevented during online coding assessments.`}</text>
        </div>
    );

}

export default Home;