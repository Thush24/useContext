
import React, {Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { useContext } from 'react';

const employeeContext= React.createContext();

function App(){

  const [employee,setEmployee] = useState({Id: 2020, Name: 'Raju', Location: 'Bengaluru', Salary: '202020'});
return(
  <div>
    <h1>Example of app component</h1>
    <employeeContext.Provider value={employee}>
    <Employee></Employee>
    </employeeContext.Provider>
    
  </div>
);
}

function Employee(){
  let context= useContext(employeeContext);
  return(
    <div>
      <h1>Example of Employee component</h1>
      <p>
        <label>Employee ID: <b>{context.Id}</b></label>
      </p>
      <p>
        <label>Employee Name: <b>{context.Name}</b></label>
      </p>
      <Salary></Salary>
    </div>
  );
}

function Salary(){
  let context= useContext(employeeContext);
  return(
    <div>
      <h2>Example of Salary component</h2>
      <p>
        <label>Employee ID: <b>{context.Id}</b></label>
      </p>
      <p>
        <label>Employee Salary: <b>{context.Salary}</b></label>
      </p>
    </div>
  );
}

const element = <App></App>

ReactDOM.render(element,document.getElementById("root"));