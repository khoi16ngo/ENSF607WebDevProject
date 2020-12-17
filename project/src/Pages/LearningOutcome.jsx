import React, { Component } from 'react';
import { Fragment } from 'react';
import { Form, Col } from 'react-bootstrap';

class LearningOutcome extends Component {
    render() { 
        const {outcome, onDelete, onSave} = this.props;

        return ( 
            <Fragment>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <span>{outcome.id}</span>
                    </Col>
                    <Col xs="auto">
                        <Form.Control 
                            type="text" 
                            value={outcome.value} 
                            onChange={(e) => {
                                e.preventDefault();
                                outcome.value = e.target.value;
                                onSave(outcome);
                            }}
                        >
                        </Form.Control>
                    </Col>
                    <Col xs="auto">
                        <button 
                            onClick={(e) => {
                                e.preventDefault(); 
                                onSave(outcome);
                            }}
                            disabled={outcome.value === "" ? true : false}
                            className="btn btn-success btn-sm"
                        >
                            Save
                        </button>
                    </Col>
                    <Col xs="auto">
                        <button 
                            onClick={(e) => {
                                e.preventDefault(); 
                                onDelete(outcome.id);
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
 
export default LearningOutcome;