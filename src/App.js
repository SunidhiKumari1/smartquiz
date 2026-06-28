import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Subjects from './Components/Subjects';
import Levels from './Components/Levels';
import Quiz from './Components/Quiz';
import Result from './Components/Result';

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {

    if (mode === "light") {

      setMode("dark");

      document.body.style.backgroundColor = "#273338";
      document.body.style.color = "white";

    } else {

      setMode("light");

      document.body.style.backgroundColor = "#B1D3B9";
      document.body.style.color = "black";
    }
  };

  return (
    <div className="App">

      <Router>

        <Navbar
          mode={mode}
          toggleMode={toggleMode}
        />

        <Routes>

          <Route
            path="/"
            element={<Home mode={mode} />}
          />

          <Route
            path="/subjects"
            element={<Subjects mode={mode} />}
          />

          <Route
            path="/levels/:subject"
            element={<Levels mode={mode} />}
          />

          <Route
            path="/quiz/:subject/:level"
            element={<Quiz mode={mode} />}
          />

          <Route
            path="/result"
            element={<Result mode={mode} />}
          />

          <Route
            path="/about"
            element={<About mode={mode} />}
          />

        </Routes>

      </Router>

    </div>
  );
}

export default App;