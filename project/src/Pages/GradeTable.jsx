import React, { Component } from 'react';
import GradeComponent from './GradeComponent.jsx';

class GradeTable extends Component {
    render() { 
        const {comps, onDelete, onSave} = this.props;

        return (  
            <div>
                {comps.length === 0 ?  
                <GradeComponent
                    key = {1}
                    onDelete={onDelete}
                    onSave={onSave}
                    comp = {{id:1, value:"",learningOutcomes:"", weight:""}}
                /> :
                comps.map(o => ( 
                        <GradeComponent
                            key = {o.id}
                            onDelete={onDelete}
                            onSave={onSave}
                            comp = {o} 
                        />   
                    ))
                }
            </div>
        );
    }
}
 
export default GradeTable;