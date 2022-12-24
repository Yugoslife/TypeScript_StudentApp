// import React from 'react';
// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import { AppName, Student, Level } from "./interfaces";
import { studentList, coursesList } from "./data";
import { DisplayData } from "./DisplayData";

function App(appName: AppName) {
  // const [studentId, setStudentId] = useState(0)

  const [student, setStudent] = useState<null | Student>(null);

  const addStudent = () => {
    setStudent({
      name: "Name: Iaroslav",
      surname: "Surname: Vasetskii",
      age: 15,
      level: "Undergraduate",
    });
  };

  return (
    <div className="App">
      <h1>{appName.name}</h1>
      <p>
        <b>
          {student?.name} {student?.surname}
        </b>
      </p>
      {student?.level === Level.Postgraduate && (
        <p>
          <b>Age: {student.age}</b>
        </p>
      )}

      <button onClick={addStudent}>Add Student</button>

      <h3>List of Students</h3>
      <div>
       <DisplayData items={studentList}/>
      </div>
      <h3>List if Courses</h3>
      <DisplayData items={coursesList}/>
    </div>
  );
}

export default App;
