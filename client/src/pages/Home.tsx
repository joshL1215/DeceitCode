import siteLogo from "../assets/site-logo.svg"
function Home() {

    return (
        <div className="flex flex-col items-center justify-center pb-20 gap-5 h-screen bg-[#f9f8f8]">
            <div>
                <img className="max-h-75" src={siteLogo} />
            </div>
            <h1 className="text-xl font-semibold">A coding challenge platform built to deter AI-based cheating tools</h1>
            <div className="text-center whitespace-pre-wrap">{`I built this app to practice and learn technologies while also experimenting with an interesting idea:\nHow can cheating with LLM powered tools be better prevented during coding assessments?`}</div>
        </div>
    );

}

export default Home;