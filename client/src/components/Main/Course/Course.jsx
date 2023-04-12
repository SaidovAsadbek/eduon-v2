import React from "react";
import courseOne from "../../assets/main/course-1.png";
import "./Course.css";

const Course = () => {
    return (
        <>
            <div className="course-item p-3 cursor-pointer w-full">
                <div className="course-header">
                    <img
                        className="rounded-[15px] cursor-pointer"
                        src={courseOne}
                        alt=""
                    />
                </div>
                <div className="course-body">
                    <div className="course-title flex items-center justify-between mt-3">
                        <h2 className="text-blue-700 hover:underline font-medium text-[20px]">
                            Путь в карьере IT на прим...
                        </h2>
                        <button className="checkout-course border border-blue-600 rounded-lg px-3 py-2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                                    stroke="#006aff"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                                    stroke="#006aff"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                                    stroke="#006aff"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M9 8H21"
                                    stroke="#006aff"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="course-content flex items-end justify-between mt-2">
                        <div className="left-side">
                            <h4 className="text-[18px] font-[600]">
                                Daily Corp Academy
                            </h4>
                            <p
                                style={{ margin: 0 }}
                                className="course-price text-[16px] text-gray-600"
                            >
                                25 000 00 so'm
                            </p>
                        </div>
                        <button className="checkout-btn bg-blue-500 text-white py-2 px-5 rounded-lg hover:bg-blue-700">
                            Purchase
                        </button>
                    </div>
                </div>
            </div>
            <div className="course-item p-3 cursor-pointer w-full">
                <div className="course-header">
                    <img
                        className="rounded-[15px] cursor-pointer"
                        src={courseOne}
                        alt=""
                    />
                </div>
                <div className="course-body">
                    <div className="course-title flex items-center justify-between mt-3">
                        <h2 className="text-blue-700 hover:underline font-medium text-[20px]">
                            Путь в карьере IT на прим...
                        </h2>
                        <button className="checkout-course border border-blue-600 rounded-lg px-3 py-2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                                    stroke="#006aff"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                                    stroke="#006aff"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                                    stroke="#006aff"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M9 8H21"
                                    stroke="#006aff"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="course-content flex items-end justify-between mt-2">
                        <div className="left-side">
                            <h4 className="text-[18px] font-[600]">
                                Daily Corp Academy
                            </h4>
                            <p
                                style={{ margin: 0 }}
                                className="course-price text-[16px] text-gray-600"
                            >
                                25 000 00 so'm
                            </p>
                        </div>
                        <button className="checkout-btn bg-blue-500 text-white py-2 px-5 rounded-lg hover:bg-blue-700">
                            Purchase
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Course;
