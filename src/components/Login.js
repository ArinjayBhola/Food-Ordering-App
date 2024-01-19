import React from 'react'
import { useRef } from 'react';
import { checkValidData } from '../utils/validate';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import UserContext from "../utils/UserContext.js"

const Login = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [abc, setAbc] = useState(null)
    const { loggedInUser, setUserName } = useContext(UserContext);
    const navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);

    const checkEmailPassword = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (!message) {
            navigate("/browse")
            setUserName(abc)
        }
    }

    return (
        <div>
            <div className="absolute">
                <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Error" className="h-screen w-screen" />
            </div>

            <div className="absolute p-12 bg-black w-1/3 mx-auto my-28 left-0 right-0 opacity-80 text-white rounded-3xl">
                <form onClick={(e) => e.preventDefault()}>
                    <h1 className="text-3xl p-4 ">Login</h1>
                    <input
                        placeholder='Full Name'
                        className="bg-gray-600 p-3 m-3 w-80 rounded-lg"
                        value={abc || ''}
                        onChange={(e) =>
                            setAbc(e.target.value)
                        }
                    />
                    <input
                        ref={email}
                        type="text"
                        placeholder="Email"
                        className="bg-gray-600 p-3 m-3 w-80 rounded-lg"
                        required
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="bg-gray-600 p-3 m-3 w-80 rounded-lg"
                        required
                    />
                    {errorMessage && <p className="ml-3 text-red-400">{errorMessage}</p>}
                    <button
                        onClick={checkEmailPassword}
                        className="p-4 m-4 bg-red-400 rounded-lg"
                    >Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;