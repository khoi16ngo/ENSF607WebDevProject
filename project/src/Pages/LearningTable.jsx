import React, { Component } from 'react';
import LearningOutcome from './LearningOutcome.jsx';

class LearningTable extends Component {
    render() { 
        const {outcomes, onDelete, onSave} = this.props;

        return (  
            <div>
                {outcomes.length === 0 ?  
                <LearningOutcome
                    onDelete={onDelete}
                    onSave={onSave}
                    outcome = {{id:1, value:""}}
                    key = {1}
                /> :
                outcomes.map(o => ( 
                        <LearningOutcome
                            onDelete={onDelete}
                            onSave={onSave}
                            outcome = {o}
                            key = {o.id}
                        />   
                    ))
                }
            </div>
        );
    }
}
 
export default LearningTable;