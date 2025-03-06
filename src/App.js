import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Quiz from "./pages/Quiz";
import './styles/Navbar.css';

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar">
                    <Link to="/">Acasă</Link>
                    <Link to="/quiz">Quiz</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<h1>Acasă</h1>} />
                    <Route path="/quiz" element={<Quiz />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
