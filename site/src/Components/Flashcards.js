import "./Flashcards.css";

import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Flashcard({question, answer, cid})
{
    return (
        <div className="flashcard">
            <input type="checkbox" id={`flip-div ${cid}`} className={`flip-div ${cid}`}/>
            <label for={`flip-div ${cid}`}>
            <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h1>{question}</h1>
                        </div>
                        <div class="flip-card-back">
                            <h1>{answer}</h1> 
                        </div>
                    </div>
            </div>
            </label>
        </div>
    )
}

Flashcard.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    cid: PropTypes.any.isRequired
};

export function Flashcards() {
    const [cards, setCards] = useState([]);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    // add new flash card
    function addCard() {
        if (question.trim() !== "" && answer.trim() !== "")
        {
            setCards(
                [
                    { question: question, answer: answer, id: cards.length },
                    ...cards
                ]
            );

            // clear text area
            document.getElementsByClassName("flashcards-textarea")[0].value = '';
            document.getElementsByClassName("flashcards-textarea")[1].value = '';
        }
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
        <div className="flashcard-container">
            <div className="flashcard-left-panel">
                <div className="flashcard-left-panel-content-div">
                    <h1 className="flashcards-title">Flashcards</h1>
                    <div className="flashcards-left-panel-button-div">
                        <h3 className="flashcards-left-panel-h3">File Control</h3>
                        <div className="flashcards-buttons-div">
                            <button onClick={() => { saveFlashcards() }} className="flashcards-buttons blue-button">Save Flashcards</button>
                            <input type="file" id="file-input" accept=".json" onChange={(e) => { loadFlashcards(e) }} className="upload-flashcards flashcards-button blue-button" name="file-input" />
                            <label id="file-input-label" for="file-input" className="blue-button flashcards-buttons">Upload Flashcards</label>

                            <button className="flashcards-buttons blue-button" onClick={() => {setCards([])}}>Clear Flashcards</button>
                        </div>
                        <div className="spacer"></div>
                    </div>

                    <div className="flashcards-left-panel-input-div">
                        <h3 className="flashcards-left-panel-h3">Questions Maker</h3>
                        <div className="flashcards-input-div">
                            <textarea placeholder="Input Question..." className="flashcards-textarea question-input" onChange={e => setQuestion(e.target.value)}></textarea>
                            <textarea placeholder="Input Answer..." className="flashcards-textarea answer-input" onChange={e => setAnswer(e.target.value)}></textarea>
                            <button className="flashcards-buttons green-button" onClick={addCard}>Add Card</button>
                        </div>
                    </div>
                </div>
            </div >
            <div className="flashcard-right-panel">
                {cards.map(card => <Flashcard question={card.question} answer={card.answer} cid={card.id}/>)}
            </div>
        </div>
    );
}