import React, { Component } from 'react';
import LearningOutcome from './LearningOutcome.jsx';

class LearningTable extends Component {
    render() { 
        const {outcomes, onDelete, onSave} = this.props;

        return (  
            <div>
                {outcomes.length === 0 ?  
                <LearningOutcome
                    key = {1}
                    onDelete={onDelete}
                    onSave={onSave}
                    outcome = {{id:1, value:""}}
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
            </div>
        );
    }
}
 
export default LearningTable;