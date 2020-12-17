import React, { Component } from 'react';
import { Fragment } from 'react';
import { Form, Col } from 'react-bootstrap';

class AttributeOutcome extends Component {
    render() { 
        const {outcome, onSave} = this.props;

        return ( 
            <Fragment>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <span>{outcome.id}</span>
                    </Col>
                    <Col xs="auto">
                        <Form.Control 
                            as="select" 
                            defaultValue={outcome.attribute} 
                            onChange={(e) => {
                                e.preventDefault();
                                outcome.attribute = e.target.value;
                            }}
                        >
                            <option value="">Select Graduate Attibute to Corresponding Learning Outcome</option>
                            <option value="A1. A knowledge base for engineering">A1. A knowledge base for engineering</option>
                            <option value="A2. Problem analysis">A2. Problem analysis</option>
                            <option value="A3. Investigation">A3. Investigation</option>
                            <option value="A4. Design">A4. Design</option>
                            <option value="A5. Use of engineering tools">A5. Use of engineering tools</option>
                            <option value="A6. Individual and team work">A6. Individual and team work</option>
                            <option value="A7. Communication skills">A7. Communication skills</option>
                            <option value="A8. Professionalism">A8. Professionalism</option>
                            <option value="A9. Impact of engineering on society/environment">A9. Impact of engineering on society/environment</option>
                            <option value="A10. Ethics and equity">A10. Ethics and equity</option>
                            <option value="A11. Economics and project management">A11. Economics and project management</option>
                            <option value="A12. Life-long learning">A12. Life-long learning</option>
                        </Form.Control>
                    </Col>
                    <Col xs="auto">
                        <Form.Control 
                            as="select" 
                            defaultValue={outcome.level} 
                            onChange={(e) => {
                                e.preventDefault();
                                outcome.level = e.target.value;
                            }}
                        >
                            <option value="">Select Instruction Level to Corresponding Learning Outcome</option>
                            <option value="I (Introduced)">I (Introduced)</option>
                            <option value="D (Developed)">D (Developed)</option>
                            <option value="A (Applied)">A (Applied)</option>
                        </Form.Control>
                    </Col>
                    <Col xs="auto">
                        <button 
                            onClick={(e) => {
                                e.preventDefault(); 
                                onSave(outcome);
                            }}
                            className="btn btn-success btn-sm"
                        >
                            Save
                        </button>
                    </Col>
                </Form.Row>
            </Fragment>
        );
    }
}
 
export default AttributeOutcome;