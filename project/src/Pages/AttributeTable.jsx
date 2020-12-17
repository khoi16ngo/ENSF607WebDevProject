import React, { Component } from 'react';
import { Fragment } from 'react';
import AttributeOutcome from './AttributeOutcome.jsx';
import { Form, Col } from 'react-bootstrap';

class AttributeTable extends Component {
    render() { 
        const {outcomes, onSave} = this.props;
        return (
            <Fragment>
                {outcomes.length === 0 ?  
                    <span className="badge m-2 badge-warning">No Learning Outcomes</span>:
                    outcomes.filter(o => o.value !== "").map(o => ( 
                        <AttributeOutcome
                            key = {o.id}
                            onSave={onSave}
                            outcome = {o}
                        />   
                    ))
                }
             </Fragment>
        );
    }
}
 
export default AttributeTable;

