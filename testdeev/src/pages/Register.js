import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveAccount } from "../redux/accountActions";
import { Link } from "react-router-dom";
import '../styles/Register.css';

const RegisterPage = () => {

    useEffect(() => { document.title = "Register Page"; })

    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [repeatPasswordRegister, setRepeatPasswordRegister] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [poisition, setPosition] = useState("");
    const [location, setLocation] = useState("");

    const postRequest = (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            url: 'https://localhost:8080/user/register',
            data: {
                emailRegister,
                passwordRegister,
                repeatPasswordRegister,
                firstName,
                lastName
            }
        });
    }

    return (
        <div className={"register-page"}>
            <h1> Register </h1>
            <div className={"register-form"}>
                <input type={"pmail"} placeholder={"Email"} value={emailRegister} onChange={((e) => setEmailRegister(e.target.value))} required /> <br />
                <input type={"password"} placeholder={"Password"} value={passwordRegister} onChange={((e) => setPasswordRegister(e.target.value))} required /> <br />
                <input type={"password"} placeholder={"Repeat password"} value={repeatPasswordRegister} onChange={((e) => setRepeatPasswordRegister(e.target.value))} required /> <br />
                <input type={"fname"} placeholder={"First Name"} value={firstName} onChange={((e) => setFirstName(e.target.value))} required /> <br />
                <input type={"lname"} placeholder={"Last Name"} value={lastName} onChange={((e) => setLastName(e.target.value))} required /> <br />
                <input type={"lname"} placeholder={"Position"} value={position} onChange={((e) => setPosition(e.target.value))} required /> <br />
                <input type={"lname"} placeholder={"Location"} value={location} onChange={((e) => setLocation(e.target.value))} required /> <br />
                <button> Register </button> <br />
                <Link to={"/loginpage"}> You have an account? Sign in! </Link>
            </div>
        </div>
    );
}

export default RegisterPage;