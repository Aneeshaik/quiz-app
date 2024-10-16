import { useEffect, useState } from "react"

const Admin = () => {
    const [resultData, setResultData] = useState([])
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true); 

    const fetchResultsData = async() => {
        const response = await fetch("http://localhost:5000/results")
        const jsonData = await response.json()
        setResultData(jsonData)
    }
    useEffect(() => {
        fetchResultsData()
    },[])
    useEffect(() => {
        const getUserName = async () => {
            const response = await fetch(`http://localhost:5000/users/${localStorage.getItem('userId')}`);
            const data = await response.json();
            // console.log(data);
            setUser(data.name);
        }
        getUserName();
    },[])
    useEffect(() => {
        if (user) {
            setTimeout(() => {
                setLoading(false); // Set loading to false after 1 second
            }, 1000); // 1000ms = 1 second
        }
    }, [user]);

    const sortedResults = resultData.sort((a, b) => b.score - a.score);

    return (
        <div className="w-full">
            {console.log(resultData)}
            {loading ? (
                <div className="text-center text-xl mt-5 animate-pulse font-medium">Fetching the latest leaderboard, please hold on...</div>
            ) : ( 
            <>
            {user && <h1 className="text-3xl font-semibold text-left mb-3">Hey {user.charAt(0).toUpperCase() + user.slice(1)}!</h1>}
            <h1 className="text-2xl font-semibold text-left">Leaderboard</h1>
            <div className="flex items-center justify-center">
            <table className="border-collapse border border-gray-500 w-full mt-5" cellPadding="10" cellSpacing="0">
                <thead className="border border-b border-gray-500 text-xl">
                    <tr>
                        <th className="w-1/3">Name</th>
                        <th className="border border-gray-500 w-1/3 border-x">Category</th>
                        <th className="w-1/3">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedResults.map((result, index) => (
                        <tr key={index}>
                            <td className="border border-gray-500 w-1/3 border-x">{result.name}</td>
                            <td className="border border-gray-500 w-1/3 border-x">{result.category}</td>
                            <td className="border border-gray-500 w-1/3 border-x">{result.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            </>
            )}
        </div>
    )
}

export default Admin