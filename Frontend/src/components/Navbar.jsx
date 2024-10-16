import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [user, setUser] = useState() 
    const fetchUserData = async() => {
      const response =  await fetch(`http://localhost:5000/users/${localStorage.getItem("userId")}`)
      const jsonData = await response.json();
      setUser(jsonData.userType)
    }
    useEffect(() => {
      fetchUserData()
    },[])

    return (
      <div className="flex items-center justify-center w-full mx-auto py-3 px-4 rounded-3xl m-4 bg-slate-300 dark:bg-white/15 backdrop-blur-sm">
        {console.log(user)}
        {user === "user" ? (
            <div className="flex justify-between w-full mx-5 items-center space-x-6">
            <Link to="/">
          <h1 className="text-3xl font-semibold cursor-pointer">Quiz App</h1>
          </Link>
          <Link to="/profile">
            <button className="font-semibold text-xl cursor-pointer">Profile</button>
          </Link>
          </div>
          ) : (
          <div className="flex justify-center w-full mx-5 items-center space-x-6">
          <Link to="/profile">
            <button className="font-semibold text-xl cursor-pointer">Profile</button>
          </Link>
          <Link to="/">
            <h1 className="text-3xl font-semibold cursor-pointer">Quiz App</h1>
          </Link>
          <Link to="/admin">
            <button className="font-semibold text-xl cursor-pointer">Admin</button>
          </Link>
          </div>
        )}
      </div>
    );
}
  
export default Navbar;
  