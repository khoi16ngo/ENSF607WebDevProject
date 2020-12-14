import { React, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, Col, Row } from 'react-bootstrap';
import useSetState from '../useSetState';

// import { BrowserRouter, Router } from "react-router-dom";

export default function CreateForm({ state, setState, setIsSubmitted }) {


    const [courseID, setCourseID] = useState("")
    

    return (
         <div> 
            <h1>Course Outline</h1>
            <div>
            <h2>1. Calendar Information</h2>
            <div>
                <Form>
                <Form.Group>
                    <Form.Label>Course ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Course ID"
                            value = {state.courseId || ""}
                            onChange = { (e) => {
                            e.preventDefault();
                            setState({courseId: e.target.value}); 
                            }
                            }                                
                        />
                </Form.Group>

                <Form.Group controlId="formCourseName">
                    <Form.Label>Course Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Course name"
                            value={state.courseName || ''}
                            onChange={(e) => {
                                e.preventDefault();
                                setState({ courseName: e.target.value})
                            }    
                            }
                        />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Course Description</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            value={state.courseDescription || ''}
                            onChange={(e) => {
                                e.preventDefault();
                                setState({ courseDescription: e.target.value})
                            }    
                            }
                        />
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalHours">
                    <Form.Label column sm={2}>
                    Course Hours
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="Enter course hours"
                            value={state.hours || ''}
                            onChange={(e) => {
                                e.preventDefault();
                                setState({hours: e.target.value})
                            }}
                            
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalCredit">
                    <Form.Label column sm={2}>
                    Academic Credit:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Enter course credits"
                            value={state.courseCredits || ''}
                            onChange={(e) => {
                                e.preventDefault();
                                setState({ courseCredits: e.target.value})
                            }    
                            }
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalReference">
                    <Form.Label column sm={2}>
                    Academic Reference:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Enter academic reference"
                            value={state.reference || ''}
                            onChange={(e) => {
                                e.preventDefault();
                                setState({ reference: e.target.value})
                            }    
                            }
                        />
                    </Col>
                </Form.Group>

                
                </Form>
            </div>
            </div>
            <div>
            <h2>
                {/* 2. Learning Outcomes */}
            </h2>
             <Button
                type="button"
                variant="primary"
                onClick={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true)
                // window.location.href='http://localhost:3001/form';
                }}
            > Create Form</Button>
            </div>
        </div>

    )
}
