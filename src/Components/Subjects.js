import { Link } from "react-router-dom";

export default function Subjects({ mode }) {

  const subjects = [
    { name: "dsa", icon: "📊" },
    { name: "oops", icon: "🧩" },
    { name: "os", icon: "💻" },
    { name: "cn", icon: "🌐" },
    { name: "dbms", icon: "🗄️" },
    { name: "html", icon: "🌍" },
    { name: "css", icon: "🎨" },
    { name: "javascript", icon: "⚡" },
    { name: "react", icon: "⚛️" },
    { name: "sql", icon: "📋" }
  ];

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
        Choose Your Subject
      </h1>

      <div className="row">

        {subjects.map((subject) => (

          <div
            className="col-sm-6 col-md-4 col-lg-3 mb-4"
            key={subject.name}
          >

            <div
              className="card h-100 shadow"
              style={cardStyle}
            >

              <div className="card-body text-center d-flex flex-column justify-content-center">

                <h1 className="mb-3">
                  {subject.icon}
                </h1>

                <h4 className="mb-4">
                  {subject.name.toUpperCase()}
                </h4>

                <Link
                  to={`/levels/${subject.name}`}
                  className="btn btn-success mt-auto"
                >
                  Select
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}