import React from 'react';
import { Button, Form, Modal, FormGroup } from 'react-bootstrap';

export const CustomModal = (setCourseList, courseList, selectedCourse, setSelectedCourse) => {
     const handleSave = () => {
        setCourseList(courseList.map((element) => (element.courseId === selectedCourse.courseId)
            ? selectedCourse : element));
        setSelectedCourse(null);
    }

    const handleDelete = () => {
        // delete in backend
        setCourseList(courseList.filter((element) => element.courseId !== selectedCourse.courseId))
        setSelectedCourse(null);
    }
    return (
        <Modal
                show={selectedCourse !== null}
                onHide={() => setSelectedCourse(null)}
                backdrop="static"
                // keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormGroup onSubmit={(e) => {
                            e.preventDefault();
                            console.log(e)
                        }}>
                        {selectedCourse && Object.entries(selectedCourse).map(([key, value]) => (
                            <>
                                <Form.Label>{key}</Form.Label>
                            <Form.Control
                                key={`modal-${key}`}
                                placeholder={value}
                                    title={key}
                                    disabled={key === 'courseId'}
                                onChange={(e) => {
                                    setSelectedCourse({...selectedCourse, [key]:e.target.value})
                                }}
                                />
                                </>
             
                        ))}
                    </FormGroup>
                    </Form>

           
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSave}>
                        Save
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
    
    )
}