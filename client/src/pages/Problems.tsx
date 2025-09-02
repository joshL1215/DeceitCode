function Problems() {
    return (
        <div className="flex flex-col items-center p-5 gap-7 min-h-screen bg-[#f5f2f2]">

            <h1 className="text-2xl font-semibold w-full text-center">Problem Directory</h1>

            <div className="w-full max-w-4xl bg-[#e0d9d9ff] rounded-lg shadow-md overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-[#d6cfcfff]">
                        <tr>
                            <th className="p-3 text-lg font-semibold">Title</th>
                            <th className="p-3 text-lg font-semibold">Difficulty</th>
                        </tr>
                    </thead>
                    <tbody>


                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Problems;