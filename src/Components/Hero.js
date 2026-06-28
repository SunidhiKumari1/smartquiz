import React from "react";
import { Link } from "react-router-dom";
import heroImage from "./quiz-hero.png";
import "../App.css";

export default function Hero({ mode }) {

  const textColor = mode === "dark" ? "white" : "black";
  const cardBg = mode === "dark" ? "#273338" : "#ffffff";
  const cardText = mode === "dark" ? "white" : "black";
  const listBg = mode === "dark" ? "#23313b" : "#ffffff";
  const myStyle = {
    backgroundColor: cardBg,
    color: cardText,
    border: mode === "dark"
      ? "1px solid white"
      : "1px solid #ddd"
  }
  return (
    <div style={{ color: textColor }}>

      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center">

          {/* Text Section */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-2 fw-bold">
              Smart Quiz
            </h1>

            <p className="lead mt-3">
              Master DSA, OOPS, OS, CN, DBMS, HTML, CSS,
              JavaScript, React and SQL through interactive
              level-based quizzes.
            </p>

            <div className="mt-4">
              <Link
                to="/subjects"
                className="btn btn-primary btn-lg me-3 mb-2"
              >
                Start Quiz
              </Link>

              <Link
                to="/about"
                className="btn btn-outline-primary btn-lg mb-2"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src={heroImage}
              alt="Quiz Illustration"
              className="img-fluid hero-image"
              style={{
                maxHeight: "450px"
              }}
            />
          </div>

        </div>
      </div>

      {/* Statistics */}
      <div className="container my-5">
        <div className="row text-center g-4">

          <div className="col-6 col-md-3">
            <h1 className="fw-bold">10+</h1>
            <p>Subjects</p>
          </div>

          <div className="col-6 col-md-3">
            <h1 className="fw-bold">100+</h1>
            <p>Levels</p>
          </div>

          <div className="col-6 col-md-3">
            <h1 className="fw-bold">1000+</h1>
            <p>Questions</p>
          </div>

          <div className="col-6 col-md-3">
            <h1 className="fw-bold">24/7</h1>
            <p>Learning</p>
          </div>

        </div>
      </div>

      {/* Learning Journey */}
      <div className="container my-5">
        <h2 className="text-center mb-5">
          Your Learning Journey
        </h2>

        <div className="row text-center g-4">

          <div className="col-6 col-md-3">
            <div
              className="card h-100 shadow"
              style={myStyle}
            >
              <div className="card-body">
                <h1>1️⃣</h1>
                <h5>Select Subject</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div
              className="card h-100 shadow"
              style={myStyle}
            >
              <div className="card-body">
                <h1>2️⃣</h1>
                <h5>Choose Level</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div
              className="card h-100 shadow"
              style={myStyle}
            >
              <div className="card-body">
                <h1>3️⃣</h1>
                <h5>Take Quiz</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div
              className="card h-100 shadow"
              style={myStyle}
            >
              <div className="card-body">
                <h1>4️⃣</h1>
                <h5>Get Results</h5>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Topics */}
      <div className="container my-5">
        <h2 className="text-center mb-4">
          Topics You'll Master
        </h2>

        <div className="row g-4">

          <div className="col-md-4">
            <ul className="list-group shadow">
              <li
                className="list-group-item"
                style={{
                  backgroundColor: listBg,
                  color: cardText
                }}
              >
                Arrays
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: listBg,
                  color: cardText
                }}
              >
                Linked Lists
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: listBg,
                  color: cardText
                }}
              >
                Trees
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <ul className="list-group shadow">
              <li
                className="list-group-item"
                style={{
                  backgroundColor: listBg,
                  color: cardText
                }}
              >
                Inheritance
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: listBg,
                  color: cardText
                }}
              >
                Polymorphism
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: listBg,
                  color: cardText
                }}
              >
                Encapsulation
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <ul className="list-group shadow">
              <li
                className="list-group-item"
                style={{
                  backgroundColor: listBg,
                  color: cardText
                }}
              >
                React Hooks
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: listBg,
                  color: cardText
                }}
              >
                SQL Queries
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: listBg,
                  color: cardText
                }}
              >
                Networking
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="container text-center my-5 py-5">
        <h2>
          Ready to Challenge Yourself?
        </h2>

        <p className="lead">
          Start solving quizzes and improve your
          technical knowledge today.
        </p>

        <Link
          to="/subjects"
          className="btn btn-success btn-lg"
        >
          Start Learning
        </Link>
      </div>

    </div>
  );
}