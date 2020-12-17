import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, Col, Row, ListGroup, Modal, FormGroup } from 'react-bootstrap';
import './Home.css'


export default function Home({ state, setState, setIsCreated }) {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [courseList, setCourseList] = useState([{
        courseId: "ENSF607",
        courseName: "Software Design",
        courseDescription: "A course to learn about software design.",
        hours: "6",
        courseCredit: "3",
        reference: "www.google.ca"

    }]);

    // useEffect(() => {
    //     fetch('path/to/list/api')
    //         .then((res) => res.json())
    //         .then((res) => setCourseList(res))
    // },[])

    useEffect(() => {

        console.log('selected Course', selectedCourse)
    }, [selectedCourse])

    useEffect(() => {
        console.log('courseList', courseList)
    },[courseList])

    const handleCourseClick = (e) => {
        console.log(e)
        setSelectedCourse({ data:e, isNewCourse: false })
    }

     const createCourseClick = (e) => {
        console.log(e)
        setSelectedCourse({isNewCourse : true, data:{
        courseId: "",
        courseName: "",
        courseDescription: "",
        hours: "",
        courseCredit: "",
        reference: ""

    }})
    }

    const handleSave = () => {
        if (selectedCourse.isNewCourse) {
            setCourseList([...courseList, selectedCourse.data])
        } else {
            setCourseList(courseList.map((element) => (element.courseId === selectedCourse.data.courseId)
                ? selectedCourse : element));
            
        }
        setSelectedCourse(null);
    }

    const handleDelete = () => {
        // Todo: delete in backend
        setCourseList(courseList.filter((element) => element.courseId !== selectedCourse.data.courseId))
        setSelectedCourse(null);
    }



    return (
        <div>
            <ListGroup>
                {courseList.map((course) => (
                    <ListGroup.Item
                        key={course.courseId}
                        onClick={() => handleCourseClick(course)}
                    >
                        {course.courseName}
                </ListGroup.Item>))}
            </ListGroup>
            <Modal
                show={selectedCourse !== null}
                onHide={() => setSelectedCourse(null)}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{selectedCourse &&`${selectedCourse.isNewCourse ? 'Create' : 'Edit' } Course`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                       <Form.Group>
                            <Form.Label>Course ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={selectedCourse && selectedCourse.data.courseId}
                                    // value = {[selectedCourse.courseId}
                                onChange={(e) => {
                                    e.preventDefault();    
                                     setSelectedCourse({
                                        isNewCourse: selectedCourse.isNewCourse,
                                        data: { ...selectedCourse.data, courseId: e.target.value }
                                    })
                                }}                         
                                />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={selectedCourse && selectedCourse.data.courseName}

                                onChange={(e) => {
                                    e.preventDefault();    
                                    setSelectedCourse({
                                        isNewCourse: selectedCourse.isNewCourse,
                                         data: { ...selectedCourse.data, courseName: e.target.value }
                                    })
                                }}                         
                                />
                        </Form.Group>

                        



                        {/* <FormGroup >
                        {selectedCourse && Object.entries(selectedCourse.data).map(([key, value]) => (
                            <>
                            <Form.Label>{key}</Form.Label>
                           
                                 
                           
                            <Form.Control
                                key={`modal-${key}`}
                                placeholder={value}
                                title={key}
                                disabled={!selectedCourse.isNewCourse && key === 'courseId'}
                                    
                                onChange={(e) => {
                                    setSelectedCourse({
                                        isNewCourse: selectedCourse.isNewCourse,
                                        data: { ...selectedCourse.data, [key]: e.target.value }
                                    })
                                }}
                                />
                                </>
             
                        ))}
                        </FormGroup> */}
                        
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSave}>
                        Save
                    </Button>
                    {selectedCourse && !selectedCourse.isNewCourse ?
                        <Button variant="primary" onClick={handleDelete}>Delete</Button>
                        : null
                    }
                </Modal.Footer>
            </Modal>
            <h1 className='title'>Hello on the main page</h1>

                
            
            <div className='createButton'>
             <Button
                
                type="button"
                variant="primary"
                onClick={() => {
                    createCourseClick();
                }}
                > 
                Create Course Outline
                </Button>
            </div>    
        </div>
    )   
}