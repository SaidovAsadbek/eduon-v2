import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="found-page h-screen flex pt-4 justify-center">
            <div className="not-found__page p-4 text-center">
                <h1>Oops!</h1>
                <h3>404 - Page NOT FOUND</h3>
                <p>
                    The page you are looking for might have been removed <br />{" "}
                    had its name changed or is temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="text-white block px-7 py-3 bg-sky-500/100"
                >
                    GO TO HOMEPAGE
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
