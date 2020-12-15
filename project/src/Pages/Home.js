import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, Col, Row } from 'react-bootstrap';
import './Home.css'

export default function Home({ state, setState, setIsCreated}) {
    return (
        <div>
            <h1 className='title'>Hello on the main page</h1>
            <div className='search'>
                <Form.Group as={Row} controlId="formHorizontalReference">
                    <Col sm={10} className='horizontalInput'>
                        <Form.Control type="text" placeholder="Search for course by Id"
                        
                            
                        />
                    </Col>
                </Form.Group>
                <Button
               
                type="button"
                variant="primary"
                onClick={(e) => {
                    
                    
                    
                }}
            > Search</Button>
            </div>
            
            <div className='createButton'>

            
             <Button
                
                type="button"
                variant="primary"
                onClick={(e) => {
                    e.preventDefault();
                    setIsCreated(true);
                }}
                > 
                Create Course Outline
                </Button>
            </div>    
        </div>
    )   
}