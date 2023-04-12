import React from "react";
import { NavLink } from "react-router-dom";
import "./Auth.css";

const Login = () => {
    return (
        <div className="Login">
            <h1>Login</h1>
            <NavLink to="/account/sign-up">Sign Up</NavLink>
        </div>
    );
};

export default Login;
