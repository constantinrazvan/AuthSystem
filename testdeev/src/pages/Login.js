import React, { useState, useEffect } from 'react';
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
                    <input type={"email"} value={email} placeholder={"Email"} onChange={(e => setEmail(e.target.value))} />
                    <input type={"password"} value={password} placeholder={"Passwordx"} onChange={(e => setPassword(e.target.value))} />
                    <button onClick={submitHandler}> Login </button>
                </div>
            </div>
        </>
    );
}

export default Login;