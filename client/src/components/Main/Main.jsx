import React from "react";
import Course from "./Course/Course";
import CoursesFilter from "./CourseFilter/CoursesFilter";

const Main = () => {
    return (
        <main className="main" id="main">
            <div className="courses-bar px-2">
                <CoursesFilter />
                <div className="px-3 py-5 course-body flex flex-wrap items-center">
                    <Course />
                </div>
            </div>
        </main>
    );
};

export default Main;
