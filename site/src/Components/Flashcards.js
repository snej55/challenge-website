import "./Flashcards.css";

import { useState } from 'react';

export function Flashcards() {
    const [cards, setCards] = useState([{"question": "what is this flash card about?", "answer": "This is a test flashcard."}]);

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
                <div className="left-panel-header">
                    <h1>Flashcards</h1>
                    <div className="left-panel-header-buttons">
                        <button >Save flashcards</button>
                        <button>Open flashcards</button>
                        <button>Clear flashcards</button>
                    </div>
                </div>
                <div></div>
            </div>

            <div className="right-panel">
                <textarea className="question-input"></textarea>
                <textarea className="answer-input"></textarea>
                <button>Add flashcard</button>
            </div>
        </div>
    );
}