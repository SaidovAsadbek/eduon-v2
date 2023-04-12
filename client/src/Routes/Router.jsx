import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Main, NotFound, Navbar, Sidebar } from "../components";
import { Register, Login } from "../pages";

const Router = () => {
    const location = useLocation();
    const isLoginPage = location.pathname !== "/account/login";
    const isSignUpPage = location.pathname !== "/account/sign-up";

    return (
        <>
            <Navbar />
            {isLoginPage && isSignUpPage && <Sidebar />}
            <div className={isLoginPage && isSignUpPage ? "pl-[80px]" : ""}>
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/cart" element={<h1>Cart Page</h1>} />
                    <Route exact path="/account/login" element={<Login />} />
                    <Route
                        exact
                        path="/account/sign-up"
                        element={<Register />}
                    />
                    <Route exact path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
};

export default Router;
