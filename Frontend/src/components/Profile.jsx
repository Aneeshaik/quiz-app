import { useEffect, useState } from "react"

const Profile = () => {
    const [resultData, setResultData] = useState([])
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true); 

    const fetchResultsData = async() => {
        const response = await fetch("https://quiz-app-bv7l.onrender.com/results")
        const jsonData = await response.json()
        setResultData(jsonData)
    }
    useEffect(() => {
        fetchResultsData()
    },[])
    useEffect(() => {
        const getUserName = async () => {
            const response = await fetch(`https://quiz-app-bv7l.onrender.com/users/${localStorage.getItem('userId')}`);
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

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    const filteredResults = user ? resultData.filter(result => result.name === user) : [];
    const sortedResults = filteredResults.sort((a, b) => b.score - a.score);

    return (
        <div className="w-full">
            {console.log(resultData)}
            {loading ? (
                <div className="text-center text-xl mt-5 animate-pulse font-medium">Retrieving your information, please wait...</div>
            ) : ( 
            <>
            {user && <h1 className="text-3xl font-semibold text-left mb-3">Hey {user.charAt(0).toUpperCase() + user.slice(1)}!</h1>}
            {sortedResults.length === 0? (
                <div className="text-center text-xl mt-5 font-medium text-red-400">You haven't taken any quizzes yet! Start your first quiz to see your results here.</div>
            ) : ( <>
            <h1 className="text-2xl font-semibold text-left mb-5">Your Quiz Results</h1>
            <div className="flex items-center justify-center bg-black/80  dark:bg-white/80 p-2 rounded-2xl">
                <table className="border-collapse bg-gray-900 border border-gray-500 w-full" cellPadding="10" cellSpacing="0">
                <thead className="border border-b border-gray-500 text-2xl">
                    <tr>
                        <th className="border text-white border-gray-500 w-1/2 border-x">Category</th>
                        <th className="text-white">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedResults.map((result, index) => (
                        <tr key={index}>
                            <td className="border opacity-90 text-white border-gray-500 w-1/2 border-x">{result.category}</td>
                            <td className="border opacity-90 text-white border-gray-500 w-1/2 border-x">{result.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <button className="bg-red-700 rounded-lg text-lg px-5 py-1 mt-3 hover:scale-102 active:scale-[0.98] transition-all duration-300 mb-4" onClick={() => {handleLogout()}}>LogOut</button>
            </>
            )}
            </>
            )}
        </div>
    )
}

export default Profile