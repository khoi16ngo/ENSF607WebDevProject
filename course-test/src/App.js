import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import useSetState from './useSetState';
import { Route, BrowserRouter as Router } from "react-router-dom";
import MyForm from "./Pages/MyForm";
import CreateForm from "./Pages/CreateForm"
import './App.css';

function App() {

  const [state, setState] = useSetState({})
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [courses, setCourses] = useState([]);

  // useEffect(() => {

  //   const getData = async () => {
  //     const result = await getCoursesFromDatabase()
  //     const data = await result.json();
  //     setCourses(data)
  //   }

  //   getData()


  //   getCoursesFromDatabase()
  //     .then(res => res.json())
  //     .then((result) => setCourses(result))
  //     .catch(err => console.log(err))
  //     .finally(() => console.log('this runs on reject and resolve'))
    
  // }, [])

  return (

    <div>
      {isSubmitted ?
        <MyForm state={state} />
        :
        <CreateForm
        state={state}
        setState={setState}
        setIsSubmitted={setIsSubmitted}
      />}
    </div>
    // <Router>

    //(boolean) ? (if true) : (if false)
      
    //   <Route path="/form" exact component={MyForm(state, setState)} />
    //   <Route path="/" exact component={CreateForm(state)} />
    // </Router>

    
  );
}

export default App;
