import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, Col, Row, ListGroup, Modal, FormGroup } from 'react-bootstrap';
import './Home.css'
import LearningTable from './LearningTable.jsx';
import AttributeTable from './AttributeTable.jsx';
import GradeTable from './GradeTable.jsx';

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
            {id: 1, value: "Have a deep understanding, and practical knowledge of object oriented analysis, design, and development.", attribute: "A3. Investigation", level: "D (Developed)"},
            {id: 2, value: "Design and develop software programs in Java.", attribute: "A4. Design", level: "A (Applied)"}
        ],
        gradeComponents: [
            {id:1, value: "Assignments",learningOutcomes:"1-7",weight:50},
            {id:2, value: "Project",learningOutcomes:"1-7",weight:25},
            {id:3, value: "Midterm",learningOutcomes:"1-7",weight:25}
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
        learningOutcomes: [],
        gradeComponents: []
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
        if(outcomes.length !== 0){
            let i = 1;
            outcomes.map(o => o.id = i++);
        }
        setSelectedCourse({...selectedCourse, data: {...selectedCourse.data, learningOutcomes: outcomes}});
    };
    const handleSaveOutcome = outcome => {
        const outcomes = [...selectedCourse.data.learningOutcomes];
        const index = outcomes.indexOf(outcome);
        if(index === -1)
            outcomes.push(outcome);
        else
            selectedCourse.data.learningOutcomes[index] = {...outcome};
        setSelectedCourse({...selectedCourse, data: {...selectedCourse.data, learningOutcomes: outcomes}});
    };
    const handleSaveAttribute = outcome => {
        const outcomes = [...selectedCourse.data.learningOutcomes];
        const index = outcomes.indexOf(outcome);
        console.log(outcome.attribute);
        console.log(outcome.level);
        selectedCourse.data.learningOutcomes[index] = {...outcome};
        setSelectedCourse({...selectedCourse, data: {...selectedCourse.data, learningOutcomes: outcomes}});
    };
   
    //----------------------------------------------------------------
    // FOR GRADE BREAKDOWN
    //----------------------------------------------------------------
    const handleDeleteGrade = compId => {
        const comps = selectedCourse.data.gradeComponents.filter(o => o.id !== compId);
        if(comps.length === 0){
            const temp = {id:1, value: "",learningOutcomes:"",weight:""};
            comps.push(temp);
        }
        else{
            let i = 1;
            comps.map(o => o.id = i++);
        }
        setSelectedCourse({...selectedCourse, data: {...selectedCourse.data, gradeComponents: comps}});
    };
    
    const handleSaveGrade = comp => {
        const comps = [...selectedCourse.data.gradeComponents];
        const index = comps.indexOf(comp);
        if(index === -1){
            comps.push(comp);
            const temp = {id:comp.id + 1, value: "",learningOutcomes:"",weight:""};
            comps.push(temp);
        }
        if(index === comps.length-1){
            const temp = {id:comp.id + 1, value: "",learningOutcomes:"",weight:""};
            comps.push(temp);
        }
        selectedCourse.data.gradeComponents[index] = {...comp};
        setSelectedCourse({...selectedCourse, data: {...selectedCourse.data, gradeComponents: comps}});
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
                size="xl"
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


                        <Form.Group>
                            <Form.Label>Course Description</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                placeholder={selectedCourse && selectedCourse.data.courseDescription}
                                onChange={(e) => {
                                    e.preventDefault();    
                                    setSelectedCourse({
                                        isNewCourse: selectedCourse.isNewCourse,
                                        data: { ...selectedCourse.data, courseDescription: e.target.value }
                                    })
                                }}         
                                />
                        </Form.Group>

                        <Form.Group controlId="Form.ControlSelect1">
                            <Form.Label>Select Course Hours</Form.Label>
                            <Form.Control as="select" 
                                placeholder = "select"
                                    onChange={(e) => {
                                    e.preventDefault();    
                                    setSelectedCourse({
                                        isNewCourse: selectedCourse.isNewCourse,
                                        data: { ...selectedCourse.data, hours: e.currentTarget.value }
                                    })
                                }}         
                            >
                                <option>{selectedCourse && selectedCourse.data.hours}</option>
                                <option>3</option>
                                <option>6</option>
                                <option>9</option>
                                <option>12</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="Form.ControlSelect1">
                            <Form.Label>Select Course Credits</Form.Label>
                            <Form.Control as="select" 
                                    placeholder = {selectedCourse && selectedCourse.data.courseCredit}
                                    onChange={(e) => {
                                    e.preventDefault();    
                                    setSelectedCourse({
                                        isNewCourse: selectedCourse.isNewCourse,
                                        data: { ...selectedCourse.data, courseCredit: e.currentTarget.value }
                                    })
                                }}         
                            >
                                <option>{selectedCourse && selectedCourse.data.courseCredit}</option>
                                <option>3</option>
                                <option>6</option>
                            </Form.Control>
                        </Form.Group>

                       <Form.Group>
                            <Form.Label>Course Reference</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={selectedCourse && selectedCourse.data.reference}

                                onChange={(e) => {
                                    e.preventDefault();    
                                    setSelectedCourse({
                                        isNewCourse: selectedCourse.isNewCourse,
                                        data: { ...selectedCourse.data, reference: e.target.value }
                                    })
                                }}                         
                                />
                        </Form.Group>

                        
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
                        <FormGroup>
                            {selectedCourse === null ? 
                                <div></div> : 
                                <AttributeTable
                                    outcomes = {selectedCourse && selectedCourse.data.learningOutcomes}
                                    onSave = {handleSaveAttribute}
                                />
                            }
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>
                                Grade Breakdown
                            </Form.Label>
                            {selectedCourse === null ? 
                                <div></div> : 
                                <GradeTable
                                    comps = {selectedCourse && selectedCourse.data.gradeComponents}
                                    onDelete = {handleDeleteGrade}
                                    onSave = {handleSaveGrade}
                                />
                            }
                        </FormGroup>

                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleSave}>
                        Save
                    </Button>
                    {selectedCourse && !selectedCourse.isNewCourse ?
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
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