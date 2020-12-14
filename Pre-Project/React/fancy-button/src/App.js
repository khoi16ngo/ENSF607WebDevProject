import 'bootstrap/dist/css/bootstrap.css';
import {Button, Form} from 'react-bootstrap';
import React, {useState} from "react";
import './App.css';

function App() {

  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState("")

  const decrement = () => {
    setCounter(counter - 1);
  };

  const setCount = (e) => {
    e.preventDefault();
    if (isNaN(Number(inputValue))){
      alert("Try again: Enter a number!")
      setCounter(0)
      return;
    }
    setCounter(parseInt(inputValue));
  };

  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      setInputValue(e.target.value);
    }
  }

  return (
    <div className="App">
      <div className="leftSide">
        <div className="btn-group">
          <Button variant="success"
          onClick={()=>setCounter(counter +1)}
          >Increment</Button>
          <Button variant="danger"
          onClick={()=>setCounter(counter -1)}
          >Decrement</Button>
        </div>

        <div className="inputBox">
          <Form>
            <Form.Group controlId="textbox">
              <Form.Control className="textBox" placeholder="Enter number"
                value={inputValue}
                onChange={(e)=> setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </Form.Group>
            <Button variant="primary" type="submit"
            onClick={setCount}
            >Set Count
            </Button>
          </Form>
        </div>
      </div>

      <div className="rightSide">
        <h1>{counter}</h1>
      </div>


    </div>
  );
}

export default App;


