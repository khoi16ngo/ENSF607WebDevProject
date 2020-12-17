import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import useSetState from './useSetState';
import MyForm from "./Pages/MyForm";
import CreateForm from "./Pages/CreateForm";
import Home from "./Pages/Home";
import './App.css';


function App() {

  const [state, setState] = useSetState({})
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCreated, setIsCreated] = useState(false)

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
      {isCreated ?
        <CreateForm
          state={state}
          setState={setState}
          setIsSubmitted={setIsSubmitted}
          setIsCreated={setIsCreated}
        />
        :
        <Home
          state={state}
          setState={setState}
          setIsCreated={setIsCreated}
          setIsSubmitted={setIsSubmitted}
        />}
    
      {isSubmitted ?
        <MyForm
          state={state}

        />
        :
        console.log("Waiting")
        // <CreateForm
        // state={state}
        // setState={setState}
        //   setIsSubmitted={setIsSubmitted}
        // />
      }
    </div>  
  );
}

export default App;
