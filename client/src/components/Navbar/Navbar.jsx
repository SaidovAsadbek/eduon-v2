import React from "react";
import logoImg from "../assets/header/eduon.svg";
import checkout from "../assets/header/checkout.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header h-[60px]" id="header">
            <nav className="navbar bg-white fixed w-full top-0 left-0 py-2 border-t border-b border-gray-300">
                <div className="container-custom mx-auto px-3">
                    <div className="flex items-center justify-between">
                        <button
                            id="toggle-submenu"
                            className="w-[55px] h-[40px] flex items-center justify-center"
                        >
                            <svg width="24" height="24">
                                <path
                                    d="M3 7H21"
                                    stroke="#1C1C1C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                ></path>
                                <path
                                    d="M3 12H21"
                                    stroke="#1C1C1C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                ></path>
                                <path
                                    d="M3 17H21"
                                    stroke="#1C1C1C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                ></path>
                            </svg>
                        </button>
                        <div className="navbar-start flex items-center gap-10">
                            <Link to="/" className="navbar-brand">
                                <img src={logoImg} alt="LOGO" />
                            </Link>
                            <button
                                id="course-btn"
                                className="bg-primary text-white flex align-middle px-6 py-2 rounded-md gap-4 hover:bg-blue-700"
                            >
                                <svg width="24" height="24" fill="none">
                                    <path
                                        d="M22 16.74V4.67001C22 3.47001 21.02 2.58001 19.83 2.68001H19.77C17.67 2.86001 14.48 3.93001 12.7 5.05001L12.53 5.16001C12.24 5.34001 11.76 5.34001 11.47 5.16001L11.22 5.01001C9.44 3.90001 6.26 2.84001 4.16 2.67001C2.97 2.57001 2 3.47001 2 4.66001V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z"
                                        stroke="#FCFCFC"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M12 5.48999V20.49"
                                        stroke="#FCFCFC"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M7.75 8.48999H5.5"
                                        stroke="#FCFCFC"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M8.5 11.49H5.5"
                                        stroke="#FCFCFC"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                                Courses
                            </button>
                        </div>

                        <form className="navbar-form w-1/4 h-[40px]">
                            <div className="border flex items-center justify-evenly h-full border-gray-300 rounded-lg">
                                <label
                                    className="search-field cursor-pointer"
                                    htmlFor="search"
                                >
                                    <svg width="24" height="24" fill="none">
                                        <path
                                            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                            stroke="#999999"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M22 22L20 20"
                                            stroke="#999999"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </label>
                                <input
                                    className="h-full w-3/4 text-sm"
                                    type="text"
                                    id="search"
                                    placeholder="Search..."
                                    autoComplete="off"
                                />
                            </div>
                        </form>
                        <div
                            id="right-block"
                            className="w-[40%] flex items-center justify-between"
                        >
                            <div className="filtering">
                                <div className="filter-header cursor-pointer h-[40px] flex items-center gap-4">
                                    <svg width="24" height="24" fill="none">
                                        <path
                                            d="M3 7H21"
                                            stroke="#1C1C1C"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        ></path>
                                        <path
                                            d="M6 12H18"
                                            stroke="#1C1C1C"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        ></path>
                                        <path
                                            d="M10 17H14"
                                            stroke="#1C1C1C"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        ></path>
                                    </svg>
                                    <h3>Filter</h3>
                                </div>
                                <div className="filter-body"></div>
                            </div>
                            <div className="speaker-block flex items-center gap-4">
                                <Link to="/">Speaker</Link>
                                <Link to="/">
                                    <img src={checkout} alt="" />
                                </Link>
                                <Link
                                    to="/account/login"
                                    className="bg-primary text-white flex align-middle px-6 py-2 rounded-md gap-4 hover:bg-blue-700"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                        <div className="user-block">
                            <Link to="/account/login">
                                <svg
                                    fill="#006AFF"
                                    width="40px"
                                    height="40px"
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium avatar pointer css-vubbuv"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="AccountCircleIcon"
                                >
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
