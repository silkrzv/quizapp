import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import '../styles/Quiz.css';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get("/questions")
            .then(response => {
                setQuestions(response.data);
            })
            .catch(error => {
                console.error("Eroare la încărcarea întrebărilor:", error);
                setError("Nu s-au putut încărca întrebările.");
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="quiz-container">
            <h1>Întrebări Quiz</h1>

            {loading && <p>Se încarcă întrebările...</p>}
            {error && <p className="error">{error}</p>}

            {!loading && !error && questions.length === 0 && (
                <p>Momentan nu sunt întrebări disponibile.</p>
            )}

            <div className="questions-list">
                {questions.map((q, index) => (
                    <div key={index} className="question-card">
                        <h3>{q.questionTitle}</h3>
                        {q.answers && (
                            <ul className="answers-list">
                                {q.answers.map((ans, idx) => (
                                    <li key={idx}>{ans}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
