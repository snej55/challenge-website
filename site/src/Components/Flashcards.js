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
            <h1>Flashcards</h1>

            <footer>
                <button>Add flashcard</button>
                <button>Save flashcards</button>
                <button>Open flashcards</button>
                <button>Clear flashcards</button>
            </footer>
        </div>
    );
}