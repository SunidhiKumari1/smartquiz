import { Link, useParams } from "react-router-dom";

export default function Levels({ mode }) {

  const { subject } = useParams();

  const levels = [1,2,3,4,5,6,7,8,9,10];

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

      <h1 className="text-center mb-5">
        {subject.toUpperCase()} Levels
      </h1>

      <div className="row">

        {levels.map((level) => (

          <div
            className="col-sm-6 col-md-4 col-lg-3 mb-4"
            key={level}
          >

            <div
              className="card h-100 shadow"
              style={cardStyle}
            >

              <div className="card-body text-center d-flex flex-column justify-content-center">

                <h1 className="mb-3">
                  🎯
                </h1>

                <h4 className="mb-3">
                  Level {level}
                </h4>

                <p>
                  Challenge yourself and test your knowledge.
                </p>

                <Link
                  to={`/quiz/${subject}/${level}`}
                  className="btn btn-primary mt-auto"
                >
                  Start Level
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}