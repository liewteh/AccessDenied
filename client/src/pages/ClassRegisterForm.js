import "./ClassRegisterForm.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/ClassFormComponents/Header.js";
import StudentName from "../components/ClassFormComponents/StudentName.js";
import Footer from "../components/Footer";
import DownloadReportButton from "../components/ClassFormComponents/DownloadReportButton";
import RegionAndClassTitle from "../components/ClassFormComponents/RegionAndClassTitle.js";

// a default student of region's class's student
const defaultStudent = {
  user_id: null,
  absence: false,
  late: 0,
  distractNotParticipate: false,
  cameraOnOff: true,
  techIssue: false,
  comments: "",
};

const ClassRegisterForm = () => {
  // hook for region's class's student's list from database
  const [students, setStudents] = useState([]);
  // hook for input students data
  const [studentsData, setStudentsData] = useState([]);

  // get region's class's student's data from database
  useEffect(() => {
    axios
      .get(`/api/students`)
      .then((res) => {
        const newStudentsData = (res.data).map((s) => {
          const defaultStudent = {
            user_id: null,
            user_name: s.user_name,
            absence: false,
            late: 0,
            distractNotParticipate: false,
            cameraOnOff: true,
            techIssue: false,
            comments: "",
          };
          return defaultStudent;
        })
        setStudents(res.data);
        setStudentsData(newStudentsData);
      })
      .catch((error) => {
        console.error(`Error while fetching data. \n${error} `);
      });
  }, []);

  const updateHandlerUserChange = (data, index) => {
    const newData = [...studentsData];
    newData[index] = data;
    setStudentsData(newData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`api/1/class_attendance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentsData)
    })
    .then(console.log)
  };

  console.log(studentsData);

  return (
    <div className="formContainer">
      <div className="HeaderContainer">
        <Header />
      </div>
      <div className="classTitle">
        <RegionAndClassTitle />
        <DownloadReportButton className="DownloadReportButton" />
      </div>
      <div className="titleGridContainer">
        <div className="grid-item"> Student Name </div>
        <div className="grid-item"> Absence </div>
        <div className="grid-item"> Late </div>
        <div className="grid-item"> Distract / Not Participate </div>
        <div className="grid-item"> Camera On / Off </div>
        <div className="grid-item"> Tech Issues </div>
        <div className="grid-item"> Comments </div>
      </div>
      <form>
        <div className="studentNameContainer">
          {studentsData.map((student, index) => (
            <StudentName 
              key={index}
              studentData={student}
              rowUpdate={(data) => updateHandlerUserChange (data, index)} 
            />
          ))}
        </div>
        <button 
          type="submit" 
          className="submitButton" 
          onClick={submitHandler}>
          Submit
        </button>
      </form>
      <div className="footer-component">
        <Footer />
      </div>
    </div>
  );
};

export default ClassRegisterForm;