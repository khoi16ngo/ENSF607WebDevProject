import React, { Component } from 'react';
import LetterGrade from './LetterGrade.jsx';

class LetterGradeTable extends Component {
    render() { 
        const {grades} = this.props;

        return (  
            <div>
                {grades.length === 0 ?  
                <LetterGrade
                    key = {1}
                    comp = {{id:1, letter:"", from:"",to:""}}
                /> :
                grades.map(g => ( 
                        <LetterGrade
                            key = {g.id}
                            grade = {g} 
                        />   
                    ))
                }
            </div>
        );
    }
}
 
export default LetterGradeTable;