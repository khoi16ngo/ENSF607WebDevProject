import React, { Component } from 'react';
import { Fragment } from 'react';
import { Form, Col } from 'react-bootstrap';

class LetterGrade extends Component {
    render() { 
        const {grade} = this.props;

        return ( 
            <Fragment>
                <Form.Row className="align-items-center">
                    <Form.Label column="sm" lg={1}>
                        {grade.letter}
                    </Form.Label>
                    <Col xs={1}>
                        <Form.Control 
                            size="sm"
                            type="text" 
                            placeholder="From"
                            defaultValue={grade.from} 
                            onChange={(e) => {
                                e.preventDefault();
                                grade.from = e.target.value;
                            }}
                        >
                        </Form.Control>
                    </Col>
                    <Col xs={1}>
                        <Form.Label column="sm" lg={2}>
                            <span>&#8804;T&#60;</span>
                        </Form.Label>
                    </Col>
                    <Col xs={1}>
                        <Form.Control 
                            size="sm"
                            type="text" 
                            placeholder="To"
                            defaultValue={grade.to} 
                            onChange={(e) => {
                                e.preventDefault();
                                grade.to = e.target.value;
                            }}
                        >
                        </Form.Control>
                    </Col>
                </Form.Row>
            </Fragment>
        );
    }
}
 
export default LetterGrade;