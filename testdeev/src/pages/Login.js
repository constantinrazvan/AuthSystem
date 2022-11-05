import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/Login.css';

const Login = () => {

    useEffect(() => {
        document.title = "Login Page";
    })

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submitHandler() {
        console.log("logged in!");
    }

    return (
        <>
            <div className={"login-page"}>
                <h1> Login </h1>
                <div className={"login-form"}>
                    <input type={"email"} value={email} placeholder={"Email"} onChange={(e => setEmail(e.target.value))} /> <br />
                    <input type={"password"} value={password} placeholder={"Password"} onChange={(e => setPassword(e.target.value))} /> <br />
                    <button onClick={submitHandler}> Login </button> <br />
                    <Link to={"/registerpage"}> You don't have an account? Sign up! </Link>
                </div>
            </div>
        </>
    );
}

export default Login;