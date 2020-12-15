import React from "react";
import './MyForm.css';

export default function Form({ state }) {
    return (
        <div className='syllabus'>
            <h1 className='title' >Course</h1>
            <div>
                <p className= 'courseInfo'>Course ID: {state.courseId}</p>
                <p className= 'courseInfo'>Course Name: {state.courseName}</p>
                <p className= 'courseInfo' id='courseDesc'>Course Description: {state.courseDescription}</p>
                <p className= 'courseInfo'>Course Hours : {state.courseHours}</p>
                <p className= 'courseInfo'>Course credits: {state.courseCredits}</p>
                <p className= 'courseInfo'>Academic Reference: {state.reference}</p>
            </div>
        </div>
       
    )
}