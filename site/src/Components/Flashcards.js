import "./Flashcards.css";

import { useState } from 'react';

export function Flashcards() {
    const [cards, setCards] = useState([]);

    // question, answer
    function addCard(q, a)
    {
        setCards(
            [
                {question: q, answer: a},
                ...cards
            ]
        )
    }

    return (
        <div className="flashcards-container">
            <div className="left-panel">
                <h1>Flashcards</h1>
                <button>Save flashcards</button>
                <button>Open flashcards</button>
                <button>Clear flashcards</button>
            </div>

            <div className="right-panel">
                <textarea className="question-input"></textarea>
                <textarea className="answer-input"></textarea>
                <button>Add flashcard</button>
            </div>
        </div>
    );
}