import React, { useEffect, useState } from "react";
import '../styles/Register.css';

const RegisterPage = () => {

    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function submitRegisterHandler() {
        console.log("logged in!");
    }

    useEffect(() => { document.title = "Register Page"; })

    // useEffect(() => { user.signedIn ? document.title = `Signed in as ${user} : document.title = 'Register Page'; })

    return (
        <div className={"register-page"}>
            <h1> Register </h1>
            <div className={"register-form"}>
                <input type={"pmail"} placeholder={"Email"} value={emailRegister} onChange={((e) => setEmailRegister(e.target.value))} />
                <input type={"password"} placeholder={"Password"} value={passwordRegister} onChange={((e) => setPasswordRegister(e.target.value))} />
                <input type={"password"} placeholder={"Repeat password"} value={emailRegister} onChange={((e) => setEmailRegister(e.target.value))} />
                <input type={"fname"} placeholder={"First Name"} value={firstName} onChange={((e) => setFirstName(e.target.value))} />
                <input type={"lname"} placeholder={"Last Name"} value={lastName} onChange={((e) => setLastName(e.target.value))} />
                <button onClick={submitRegisterHandler}> Register </button>
            </div>
        </div>
    );
}

export default RegisterPage;