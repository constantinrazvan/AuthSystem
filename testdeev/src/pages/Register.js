import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveAccount } from "../redux/accountActions";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import '../styles/Register.css';

const RegisterPage = () => {

    useEffect(() => { document.title = "Register Page"; })

    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [repeatPasswordRegister, setRepeatPasswordRegister] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [location, setLocation] = useState("");

    const [loading, setloading] = useState(false);
    const [error, setError] = useState("");
    const [redirect, setRedirect] = useState(false);

    const postRequest = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:4000/registerpage',
            data: {
                emailRegister,
                passwordRegister,
                repeatPasswordRegister,
                firstName,
                lastName,
                position,
                location
            }
        });
    }

    const submitHandler = () => {
        if (
            !emailRegister.length ||
            !passwordRegister.length ||
            !repeatPasswordRegister.length ||
            !firstName.length ||
            !lastName.length ||
            !position.length ||
            !location.length
        )
            return setError("Please fill all fields.");
        if (!emailRegister.includes("@"))
            return setError("Provide a valid email address.");
        if (passwordRegister !== repeatPasswordRegister)
            return setError("Passwords do not match.");
        setError("");
        postRequest();
    };

    return (
        <div className={"register-page"}>
            <h1> Register </h1>
            <div className={"register-form"}>
                <input type={"pmail"} placeholder={"Email"} value={emailRegister} onChange={((e) => setEmailRegister(e.target.value))} required /> <br />
                <input type={"password"} placeholder={"Password"} value={passwordRegister} onChange={((e) => setPasswordRegister(e.target.value))} required /> <br />
                <input type={"password"} placeholder={"Repeat password"} value={repeatPasswordRegister} onChange={((e) => setRepeatPasswordRegister(e.target.value))} required /> <br />
                <input type={"fname"} placeholder={"First Name"} value={firstName} onChange={((e) => setFirstName(e.target.value))} required /> <br />
                <input type={"lname"} placeholder={"Last Name"} value={lastName} onChange={((e) => setLastName(e.target.value))} required /> <br />
                <input type={"position"} placeholder={"Position"} value={position} onChange={((e) => setPosition(e.target.value))} required /> <br />
                <input type={"location"} placeholder={"Location"} value={location} onChange={((e) => setLocation(e.target.value))} required /> <br />
                {loading ? (
                    <span>Loading...</span>
                ) : (
                <button onClick={submitHandler}> Register </button>
                    )}
                <Link to={"/loginpage"}> You have an account? Sign in! </Link>
                {error.length ? <span>{error}</span> : null}
                {redirect && <Navigate to="/" />}
            </div>
        </div>
    );
}

export default RegisterPage;