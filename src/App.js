
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  const showAlert = (message , type ) =>{
    setAlert({
      msg: message,
      type:type 
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      showAlert('Dark Mode Has been Enable','success');
      document.title='CB Dry Fruit - Dark Mode';
     // setInterval(()=>{
      //  document.title='CB Dry Fruit its a Amazing Dark Mode';
      //},2000);

     // setInterval(()=>{
     //   document.title='CB Dry Fruit is Installed Now !!';
     // },1000);
    }
    else {
      setMode ('light');
      showAlert('Light Mode Has been Enable','success');
      document.title='CB Dry Fruit - Light Mode';
    }

  }
  
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);
  return (
    <> 
    <Router>
       <Navbar title= "PRODUCTS" aboutText="About Us" signup="SignUp" mode={mode} toggleMode={toggleMode}/> 
       <Alert alert ={alert}/>
      <div className="container" >

          <Switch>
          <Route exact path="/about"> <About/> </Route>
          <Route exact path="/"> <TextForm heading="Enter the Text to be Analyze" showAlert={showAlert}/> </Route>
         </Switch>
      </div>
   </Router>
  </>
  );
}

export default App;
