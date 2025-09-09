import { useEffect, useState } from "react";

function Problems() {

    type Problem = {
        slug: string;
        title: string;
        difficulty: string;
    };

    const [problems, setProblems] = useState<Problem[]>([]);

    useEffect(() => {
        const fetchProblems = async () => {
            const fetchedProblems = await fetch("http://localhost:5000/problems");
            const jsonifiedProblems = await fetchedProblems.json();

            setProblems(jsonifiedProblems);
        };
        fetchProblems();
    }, []);

    return (
        <div className="flex flex-col items-center p-5 gap-7 min-h-screen bg-[#f9f8f8]">
            <h1 className="text-2xl font-semibold w-full text-center">Problem Directory</h1>
            <div className="w-full max-w-4xl bg-[#e0d9d9ff] rounded-lg shadow-md overflow-hidden">

                {/* Table header */}
                <div className="w-full bg-[#d6cfcfff]">
                    <div className="flex flex-row -2 text-left">
                        <div className="flex-8 p-3 text-lg font-semibold">Title</div>
                        <div className="flex-1 p-3 text-lg font-semibold">Difficulty</div>
                    </div>
                </div>

                {/* Scrollable table body */}
                <div className="max-h-[65vh] overflow-y-scroll colored-scrollbar">
                    {problems.map(problem => (
                        <a href={`/problems/${problem.slug}`}>
                            <div key={problem.slug} className="flex flex-row text-left border-b border-gray-300 hover:bg-[#d6cfcfff]">
                                <div className="flex-8 py-5 pl-5">{problem.title}</div>
                                <div className="flex-1 py-5">{problem.difficulty}</div>
                            </div>
                        </a >
                    ))}
                </div>

            </div>
        </div>
    );

}

export default Problems;