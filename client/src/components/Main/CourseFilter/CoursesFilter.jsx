import React from "react";
import { NavLink } from "react-router-dom";

const CoursesFilter = () => {
    return (
        <div
            className="overflow-x-scroll flex items-center py-3 px-3"
            id="course-scroll-x"
        >
            <ul className="flex items-center justify-between gap-10">
                <li>
                    <NavLink to="/">
                        <span>Business</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <span>IT and Programming</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <span>Photo and Video</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <span>Education and science</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <span>Marketing</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <span>Art</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <span>Personal growth</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default CoursesFilter;
