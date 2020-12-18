import React, { Component } from 'react';
import LearningOutcome from './LearningOutcome.jsx';

class LearningTable extends Component {
    render() { 
        const {outcomes, onDelete, onSave} = this.props;

        console.log(outcomes.length)
        
        return (  
            <div>
                {outcomes.length === 0 ?  
                <LearningOutcome
                    key = {1}
                    onDelete={onDelete}
                    onSave={onSave}
                    outcome = {{id:1, value:"", attribute:"", level: ""}}
                /> :
                outcomes.map(o => ( 
                    <LearningOutcome
                        key = {o.id}
                        onDelete={onDelete}
                        onSave={onSave}
                        outcome = {o}            
                    />   
                ))
                }
                {outcomes.length !== 0 ? 
                    <LearningOutcome
                    key = {outcomes[outcomes.length-1].id + 1}
                    onDelete={onDelete}
                    onSave={onSave}
                    outcome = {{id:outcomes[outcomes.length-1].id + 1, value:"", attribute:"", level: ""}}
                    />:
                    <div></div>
                }
            </div>
        );
    }
}
 
export default LearningTable;