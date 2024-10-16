import './App.css';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Profile from './components/Profile'; 
import Admin from './components/Admin';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const checkValidation = async() => {
        const storedToken = localStorage.getItem("token");
        // console.log(storedToken);
        
        if (storedToken) {
            try{
                const response = await fetch('http://localhost:5000/auth/check', {
                    headers:{
                        'Authorization': `Bearer ${storedToken}`
                    }
                })
                // console.log(response);
                if(response.ok) setIsLoggedIn(true);
                else{
                    localStorage.removeItem('token');
                    setIsLoggedIn(false);
                }
            } catch(error) {
                localStorage.removeItem('token');
                setIsLoggedIn(false)
            }
        } else {
            setIsLoggedIn(false);
        }
        setIsLoading(false);
    }
    useEffect(() => {
        checkValidation();
      }, []);
    
      if(isLoading){
        return <div>Loading....</div>
      }
  return (
    <div className="App w-[95%] lg:w-1/2 mx-auto relative h-screen flex flex-col">
    <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
    <Router>
    {isLoggedIn? (
      <>
        <Navbar />
        <RoutesWrapper />    
      </>
    ) : (
      <SignIn onSuccessfullLoggedIn = {checkValidation} />
    ) }
    </Router>
  </div>
  );
}

const RoutesWrapper = () => {
  const location = useLocation();

  return (
    <div className={`w-full ${location.pathname === '/' ? 'flex-grow flex justify-center items-center -mt-5' : 'mt-0'}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
