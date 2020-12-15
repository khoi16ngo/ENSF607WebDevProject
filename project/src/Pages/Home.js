import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button} from 'react-bootstrap';

export default function Home({ state, setState, setIsCreated}) {
    return (
        <div>
            <h1>Hello on the main page</h1>
             <Button
               
                type="button"
                variant="primary"
                onClick={(e) => {
                    e.preventDefault();
                    setIsCreated(true);
                    
                    
                }}
            > Create Course Outline</Button>
        </div>
    )   
}