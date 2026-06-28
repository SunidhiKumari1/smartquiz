import React from "react";

export default function About(props) {
  const myStyle = {
      color:props.mode === "dark" ? "white" : "black", 
      backgroundColor: props.mode === "dark" ? "#273338" : "#B1D3B9", 
      borderColor: props.mode === "dark" ? "white" : "black"
  }
  return (
    <div className="container my-4" >
      <h1 className="mb-4">About Smart Quiz</h1>

      <div className="accordion" id="aboutAccordion">
        
        {/* About App */}
        <div className="accordion-item text-start" style={myStyle}>
          <h2 className="accordion-header" id="headingOne" >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={myStyle}
            >
              📖 About the App
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body text-start">
              Smart Quiz is an interactive quiz platform designed specifically
              for Computer Science and Engineering students. It helps students
              improve their technical knowledge through level-based quizzes.
            </div>
          </div>
        </div>

        {/* Subjects */}
        <div className="accordion-item text-start" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              📚 Subjects Covered
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body text-start">
              <ul>
                <li>Data Structures & Algorithms (DSA)</li>
                <li>Object-Oriented Programming (OOPS)</li>
                <li>Operating Systems (OS)</li>
                <li>Computer Networks (CN)</li>
                <li>Database Management Systems (DBMS)</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="accordion-item text-start" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              🚀 Features
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body text-start" style={myStyle}>
              <ul>
                <li>Subject-wise quizzes</li>
                <li>10 progressive levels</li>
                <li>Score tracking</li>
                <li>Level unlocking system</li>
                <li>Responsive design</li>
                <li>Dark/Light mode</li>
                <li>Leaderboard</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="accordion-item text-start" style={myStyle}>
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={myStyle}
            >
              🛠️ Technologies Used
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body text-start" style={myStyle}>
              <ul>
                <li>React.js</li>
                <li>React Router</li>
                <li>Bootstrap 5</li>
                <li>JavaScript (ES6+)</li>
                <li>Local Storage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Purpose */}
        <div className="accordion-item text-start" style={myStyle}>
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              style={myStyle}
            >
              🎯 Purpose
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body text-start">
              This project aims to help CSE students revise core concepts,
              prepare for exams and interviews, and track their learning
              progress through engaging quizzes.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}