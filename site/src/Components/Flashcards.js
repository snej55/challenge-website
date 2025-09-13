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
        <div className="flashcard-left-panel">
            <div className="flashcard-left-panel-content-div">

                <h1 className="flashcards-title">Flashcards</h1>

                <div className="flashcards-left-panel-button-div">
                    <h3 className="flashcards-left-panel-h3">File Control</h3>
                    <div className="flashcards-buttons-div">
                        <button onClick={() => { saveFlashcards() }} className="flashcards-buttons blue-button">Save Flashcards</button>
                        <input type="file" id="file-input" accept=".json" onChange={(e) => { loadFlashcards(e) }} className="upload-flashcards flashcards-button blue-button" name="file-input" />
                        <label id="file-input-label" for="file-input" className="blue-button flashcards-buttons">Upload Flashcards</label>

                        <button className="flashcards-buttons blue-button">Clear Flashcards</button>
                    </div>

                    <div className="spacer"></div>
                </div>

                <div className="flashcards-left-panel-input-div">
                    <h3 className="flashcards-left-panel-h3">Questions Maker</h3>
                    <div className="flashcards-input-div">

                        <textarea placeholder="Input Question..." className="flashcards-textarea question-input"></textarea>
                        <textarea placeholder="Input Answer..." className="flashcards-textarea answer-input"></textarea>
                        <button className="flashcards-buttons green-button">Add Card</button>

                    </div>

                </div>

            </div>

        </div >



    );
}