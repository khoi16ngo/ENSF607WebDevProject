import React from "react";


export default function Form({ state }) {
    return (
        <div>
            <h1>Course</h1>
            <div>
                <p>Course ID: {state.courseId}</p>
                <p>Course Name: {state.courseName}</p>
                <p>Course Description: {state.courseDescription}</p>
                <p>Course Hours : {state.courseHours}</p>
                <p>Course credits: {state.courseCredits}</p>
                <p>Academic Reference: {state.reference}</p>

                <h1>
                    {state}
                </h1>
            </div>
        </div>
       
    )
}