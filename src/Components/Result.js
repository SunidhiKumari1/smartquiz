import { useLocation, Link } from "react-router-dom";

export default function Result({ mode }) {

  const location = useLocation();

  if (!location.state) {
    return (
      <div className="container text-center mt-5">
        <h2>No quiz data found.</h2>

        <Link
          to="/subjects"
          className="btn btn-primary mt-3"
        >
          Back to Subjects
        </Link>
      </div>
    );
  }

  const {
    score,
    questions,
    answers,
    subject,
    level
  } = location.state;

  const percentage = Math.round(
    (score / questions.length) * 100
  );

  const cardStyle = {
    backgroundColor:
      mode === "dark" ? "#273338" : "white",

    color:
      mode === "dark" ? "white" : "black",

    border:
      mode === "dark"
        ? "1px solid white"
        : "1px solid black"
  };

  return (

    <div className="container py-5">

      <div
        className="card shadow mb-5 text-center"
        style={cardStyle}
      >

        <div className="card-body">

          <h1>
            Quiz Result
          </h1>

          <h3 className="mt-3">
            {subject?.toUpperCase()} - Level {level}
          </h3>

          <h2 className="my-4">
            {score} / {questions.length}
          </h2>

          <h4>
            Percentage: {percentage}%
          </h4>

        </div>

      </div>

      <h2 className="mb-4">
        Answer Review
      </h2>

      {questions.map((q, index) => {

        const isCorrect =
          answers[index] === q.answer;

        return (

          <div
            key={index}
            className="card mb-4 shadow"
            style={cardStyle}
          >

            <div className="card-body">

              <h5>
                Q{index + 1}. {q.question}
              </h5>

              <p
                className={`mt-3 fw-bold ${
                  isCorrect
                    ? "text-success"
                    : "text-danger"
                }`}
              >
                {isCorrect
                  ? "✅ Correct"
                  : "❌ Incorrect"}
              </p>

              <p>
                <strong>
                  Your Answer:
                </strong>{" "}
                {answers[index] || "Not Answered"}
              </p>

              <p>
                <strong>
                  Correct Answer:
                </strong>{" "}
                {q.answer}
              </p>

            </div>

          </div>

        );

      })}

      <div className="text-center mt-5">

        <Link
          to="/subjects"
          className="btn btn-success btn-lg me-3"
        >
          Choose Another Subject
        </Link>

        <Link
          to={`/levels/${subject}`}
          className="btn btn-primary btn-lg"
        >
          Back to Levels
        </Link>

      </div>

    </div>
  );
}