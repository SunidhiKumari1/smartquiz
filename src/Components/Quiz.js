import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import quizData from "./quizData";

export default function Quiz({ mode }) {

  const { subject, level } = useParams();

  const questions = quizData[subject][level];

  const [answers, setAnswers] = useState({});

  const navigate = useNavigate();

  const handleOption = (qIndex, option) => {
    setAnswers({
      ...answers,
      [qIndex]: option
    });
  };

  const submitQuiz = () => {

    let score = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        score++;
      }
    });

    navigate("/result", {
      state: {
        score,
        questions,
        answers,
        subject,
        level
      }
    });
  };

  const cardStyle = {
    backgroundColor:
      mode === "dark" ? "#273338" : "#ffffff",

    color:
      mode === "dark" ? "white" : "black",

    border:
      mode === "dark"
        ? "1px solid white"
        : "1px solid black"
  };

  return (

    <div className="container py-4">

      <h2 className="my-4 text-center">
        {subject.toUpperCase()} - Level {level}
      </h2>

      {questions.map((q, index) => (

        <div
          className="card mb-4 shadow"
          key={index}
          style={cardStyle}
        >

          <div className="card-body text-start">

            <h5 className="mb-3">
              {index + 1}. {q.question}
            </h5>

            {q.options.map((option) => (

              <div
                className="form-check mb-2"
                key={option}
              >

                <input
                  className="form-check-input"
                  type="radio"
                  name={`q${index}`}
                  id={`${index}-${option}`}
                  checked={
                    answers[index] === option
                  }
                  onChange={() =>
                    handleOption(index, option)
                  }
                />

                <label
                  className="form-check-label"
                  htmlFor={`${index}-${option}`}
                >
                  {option}
                </label>

              </div>

            ))}

          </div>

        </div>

      ))}

      <div className="text-center">

        <button
          className="btn btn-success btn-lg px-4"
          onClick={submitQuiz}
        >
          Submit Quiz
        </button>

      </div>

    </div>
  );
}