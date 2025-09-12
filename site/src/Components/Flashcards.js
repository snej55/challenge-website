import "./Flashcards.css";

import React, { useState } from 'react';

export function Flashcards() {
    const [cards, setCards] = useState([{ "question": "what is this flash card about?", "answer": "This is a test flashcard." }]);

    // question, answer
    function addCard(q, a) {
        setCards(
            [
                { question: q, answer: a },
                ...cards
            ]
        )
    }

    // these are for file save and load dialogs
    // <button onClick={() => {saveFlashcards()}}>Save flashcards</button>
    // <input type="file" id="file-input" accept=".json" onChange={(e) => {loadFlashcards(e)}}/>

    function saveFlashcards() {
        const flashcards = {
            "flashcards": cards
        };

        const json = JSON.stringify(flashcards);
        // create blob with data to download
        const blob = new Blob([json], { type: 'text/json' });
        // create anchor element and dispatch click to trigger download
        const a = document.createElement('a');
        a.download = "flashcards.json";
        a.href = window.URL.createObjectURL(blob);
        const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });

        // download file
        a.dispatchEvent(clickEvent);
        a.remove();
    }

    function loadFlashcards(event) {
        const file = event.target.files[0];
        if (!file) {
            alert("No file selected!");
            return;
        }

        // read the file
        const reader = new FileReader();
        reader.onload = () => {
            console.log(reader.result);

            try {
                const json = JSON.parse(reader.result);
                setCards(json.flashcards);
            } catch {
                alert(`Error parsing json: ${reader.result}`);
            }

            console.log(cards);
        };

        reader.readAsText(file);
    }

    return (
        <div className="flashcards-container">
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