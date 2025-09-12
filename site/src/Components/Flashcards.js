import "./Flashcards.css";

import { useState } from 'react';

export function Flashcards() {
    const [cards, setCards] = useState([]);

    // question, answer
    function addCard(q, a) {
        setCards(
            [
                { question: q, answer: a },
                ...cards
            ]
        )
    }

    return (
        <div className="flashcards-container">
            {/* <div className="left-panel">
                <div className="left-panel-header">
                    <h1>Flashcards</h1>

                </div>
                <div></div>
            </div>

            <div className="right-panel">

            </div> */}
            {/* <div className="flashcards-header">
                <h1 className="flashcards-title">Flashcards</h1>
                <div className="flashcards-header-button-div">
                    <button >Save flashcards</button>
                    <button>Open flashcards</button>
                    <button>Clear flashcards</button>
                </div>
            </div>
            <div className="flashcards-right-panel">
                <textarea className="question-input"></textarea>
                <textarea className="answer-input"></textarea>
                <button>Add flashcard</button>
            </div> */}
            <div className="flashcard-left-panel">
                <h1 className="flashcards-title">Flashcards</h1>
                <div className="flashcards-left-panel-button-div">
                    <button >Save flashcards</button>
                    <button>Open flashcards</button>
                    <button>Clear flashcards</button>
                </div>

            </div>


        </div>
    );
}