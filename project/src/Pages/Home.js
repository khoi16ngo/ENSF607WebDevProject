import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, Col, Row, ListGroup, Modal, FormGroup } from 'react-bootstrap';
import './Home.css'
import LearningTable from './LearningTable.jsx';

export default function Home({ state, setState, setIsCreated }) {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [courseList, setCourseList] = useState([{
        courseId: "ENSF607",
        courseName: "Software Design",
        courseDescription: "A course to learn about software design.",
        hours: "6",
        courseCredit: "3",
        reference: "www.google.ca",
        learningOutcomes: [
            {id: 1, value: "Have a deep understanding, and practical knowledge of object oriented analysis, design, and development."},
            {id: 2, value: "Design and develop software programs in Java."},
            {id: 3, value: "Define the concepts of object-oriented design, such as inheritance and polymorphism."},
            {id: 4, value: "Design and develop client-server applications."}
        ]
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
        reference: "",
        learningOutcomes: []
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

    //----------------------------------------------------------------
    // FOR LEARNING OUTCOME
    //----------------------------------------------------------------
    const handleDeleteOutcome = outcomeId => {
        const outcomes = selectedCourse.data.learningOutcomes.filter(o => o.id !== outcomeId);
        if(outcomes.length === 0){
            const temp = {id:1, value: ""};
            outcomes.push(temp);
        }
        else{
            let i = 1;
            outcomes.map(o => o.id = i++);
        }
        setSelectedCourse({...selectedCourse, data: {...selectedCourse.data, learningOutcomes: outcomes}});
    };
    const handleSaveOutcome = outcome => {
        const outcomes = [...selectedCourse.data.learningOutcomes];
        const index = outcomes.indexOf(outcome);
        if(index === -1){
            outcomes.push(outcome);
            const temp = {id:outcome.id + 1, value: ""};
            outcomes.push(temp);
        }
        if(index === outcomes.length-1){
            const temp = {id:outcome.id + 1, value: ""};
            outcomes.push(temp);
        }
        selectedCourse.data.learningOutcomes[index] = {...outcome};
        setSelectedCourse({...selectedCourse, data: {...selectedCourse.data, learningOutcomes: outcomes}});
    };
   
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
                        
                        <FormGroup>
                            <Form.Label>
                                Learning Outcomes
                            </Form.Label>
                            {selectedCourse === null ? 
                                <div></div> : 
                                <LearningTable
                                    outcomes = {selectedCourse && selectedCourse.data.learningOutcomes}
                                    onDelete = {handleDeleteOutcome}
                                    onSave = {handleSaveOutcome}
                                />
                            }
                        </FormGroup>

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