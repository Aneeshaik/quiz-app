import { useState } from "react";
import { toastSuccess, toastWarning, toastError } from "../utils/Toast";

const SignIn = ({onSuccessfullLoggedIn}) => {
    const [login, setLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: 'user',
    });

    const handleClick = () => {
        setLogin(!login);
        setFormData({
            name:'',
            email: '',
            password: '',
            confirmPassword: '',
            userType: 'user',
        })
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSigninSubmit = async(e) => {
        e.preventDefault();
        console.log("SignIn clicked");
        
        if(!formData.email){
           return toastWarning('Please enter your email');
        }
        else if(!formData.password){
            return toastWarning('Please enter your password');
        }
        try{
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            })

            const data = await response.json();
            console.log(data.status);
            

            if (response.ok) {
                if (response.status === 201) {
                    toastSuccess(data.message); // Display success toast
                    console.log("Login Successful from frontend:", data);
                } else {
                    toastSuccess("Unexpected success response."); // Handle other success cases
                }
            } else {
                // Handle errors based on response status
                if (response.status === 401) {
                    toastError(data.message); // Display error toast
                    console.log("Failure in logging in:", data);
                } else {
                    toastError("An unexpected error occurred."); // Handle other unexpected errors
                }
            }
            localStorage.setItem("token", data.token)
            localStorage.setItem("userId", data.userId)
            onSuccessfullLoggedIn();
        }
        catch(error){
            console.error("Registration Failed:", error);
        }
    }
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        console.log("Clicked");
        if(!formData.name){
            toastWarning('Please enter your name');
            return;
        } else if(!formData.email){
            toastWarning('Please enter your email');
            return;
        } else if(!formData.email.includes("@") || !formData.email.includes(".")){
            toastWarning("Please enter a valid email");
            return;
        } else if(!formData.password){
            toastWarning('Please enter your password');
            return;
        } else if(formData.password.length < 8){
            toastWarning('Password must be 8 characters');
            return;
        } else if(!formData.confirmPassword){
            toastWarning('Please enter confirm password');
            return;
        }
        if(formData.password !== formData.confirmPassword){
           toastWarning("Password doesn't match");
           return;          
        }
        try{
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    userType: formData.userType
                }),
            })
            const data = await response.json();
            console.log("Registration Successful from frontend:", data);
            if(response.ok){
                toastSuccess(data.message); // Display success toast
            }
            console.log(data.token);
            localStorage.setItem("token", data.token)
            localStorage.setItem("userId", data.userId)
            onSuccessfullLoggedIn();
        }
        catch(error){
            console.error("Registration Failed:", error);
        }
        
    }
    return (
        <div className="relative flex justify-center">
            <h1 className="absolute text-3xl font-semibold cursor-pointer mt-5">Quiz App</h1>
        <div className="flex flex-col justify-center items-center h-screen">
        <div className="m-2 flex justify-start">
            <form className="" onSubmit={login? handleSigninSubmit : handleSignupSubmit}>
                <h1 className="mx-auto mb-4 text-3xl">{
                    login? 'Sign In' : 'Sign Up'
                }</h1>
                {!login &&
                <div className="m-2">
                    <input className="rounded-lg w-60 border-2 p-2 bg-transparent focus:outline-none" type="text" placeholder="Name of the user" name="name" value={formData.name} onChange={handleChange} />
                </div>
                }
                <div className="m-2">
                    <input className="rounded-lg w-60 border-2 p-2 bg-transparent focus:outline-none" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="m-2">
                    <input className="rounded-lg w-60 border-2 p-2 bg-transparent focus:outline-none" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                {!login &&
                <div className="m-2">
                    <input className="rounded-lg w-60 border-2 p-2 bg-transparent focus:outline-none" type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                </div> 
                }
                {!login &&
                <div className="m-4">
                <label for="role" class="mr-4">Select Role:</label>
                <select class="border cursor-pointer text-black border-gray-300 px-2 py-1 rounded-md" name="userType" value={formData.userType} onChange={handleChange}>
                    <option className="cursor-pointer" value="user">User</option>
                    <option className="cursor-pointer" value="admin">Admin</option>
                </select>
                </div> 
                }
                <button className="px-2 w-60 py-1 text-lg bg-blue-400 rounded-3xl" type="submit">{
                    login? 'Sign In' : 'Sign Up'
                }</button>
                {login? 
                <p className="m-2">Don't have an account? <button onClick={handleClick} type="button" className="underline">Sign Up</button></p> :
                <p className="m-2">Created an account? <button onClick={handleClick} type="button" className="underline">Sign In</button></p>
                }
            </form>
        </div>
        </div>
        </div>
    )
}

export default SignIn;