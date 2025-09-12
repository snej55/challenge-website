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

    function saveFlashcards()
    {
        const flashcards = {
            "flashcards": cards
        };

        const json = JSON.stringify(flashcards);
        // create blob with data to download
        const blob = new Blob([json], {type: 'text/json'});
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

    try {
        const fileInput = document.getElementById("file-input");
        fileInput.addEventListener("change", loadFlashcards)
    } catch {
        
    }

    function loadFlashcards(event)
    {
        const file = event.target.files[0];
        if (!file) {
            alert("No file selected!");
            return;
        }
        
        if (!file.type.startsWith("text")) {
            alert("Unsupported file type. Please select a text file.");
            return;
        }

        // read the file
        const reader = new FileReader();
        reader.onload = () => {
            console.log(reader.result);
        };

        reader.readAsText(file);
    }

    return (
        <div className="flashcards-container">
            <div className="left-panel">
                <div className="left-panel-header">
                    <h1>Flashcards</h1>
                    <div className="left-panel-header-buttons">
                        <button onClick={() => {saveFlashcards()}}>Save flashcards</button>
                        <input type="file" id="file-input"/>
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