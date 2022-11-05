import React from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const account = useSelector((state) => state.account);
    console.log(account);

    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h1> Welcome! </h1>
                <Link to={"/loginpage"}> Login </Link>
                <Link to={"/registerpage"}> Register </Link>
            </div>
        </div>
    );
}

export default HomePage;