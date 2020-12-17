import React, { Component } from 'react';
import { Fragment } from 'react';
import { Form, Col } from 'react-bootstrap';

class GradeComponent extends Component {
    render() { 
        const {comp, onDelete, onSave} = this.props;

        return ( 
            <Fragment>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <span>{comp.id}</span>
                    </Col>
                    <Col xs={4}>
                        <Form.Control 
                            type="text" 
                            placeHolder="Component"
                            defaultValue={comp.value} 
                            onChange={(e) => {
                                e.preventDefault();
                                comp.value = e.target.value;
                            }}
                        >
                        </Form.Control>
                    </Col>
                    <Col xs={2}>
                        <Form.Control 
                            type="text" 
                            placeHolder="ie.1-7"
                            defaultValue={comp.learningOutcomes} 
                            onChange={(e) => {
                                e.preventDefault();
                                comp.learningOutcomes = e.target.value;
                            }}
                        >
                        </Form.Control>
                    </Col>
                    <Col xs={2}>
                        <Form.Control 
                            type="text" 
                            placeHolder="%"
                            defaultValue={comp.weight} 
                            onChange={(e) => {
                                e.preventDefault();
                                comp.weight = e.target.value;
                            }}
                        >
                        </Form.Control>
                    </Col>
                    <Col xs="auto">
                        <button 
                            onClick={(e) => {
                                e.preventDefault(); 
                                onSave(comp);
                            }}
                            className="btn btn-success btn-sm"
                        >
                            Save
                        </button>
                    </Col>
                    <Col xs="auto">
                        <button 
                            onClick={(e) => {
                                e.preventDefault(); 
                                onDelete(comp.id);
                            }}
                            className="btn btn-danger btn-sm"
                        >
                            Delete
                        </button>
                    </Col>
                </Form.Row>
            </Fragment>
        );
    }
}
 
export default GradeComponent;