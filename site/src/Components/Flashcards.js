import "./Flashcards.css";

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// flash card with fancy 3D rotate animation (taken from here: https://www.w3schools.com/howto/howto_css_flip_card.asp)
function Flashcard({ question, answer, cid }) {
    return (
        <div className="flashcard">
            {/* invisible checkbox to flip card */}
            <input type="checkbox" id={`flip-div ${cid}`} className={`flip-div ${cid}`} />
            <label for={`flip-div ${cid}`}>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p class="flashcard-question">{question}</p>
                        </div>
                        <div class="flip-card-back">
                            <p class="flashcard-answer">{answer}</p>
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
    // card id makes each check box label unique
    cid: PropTypes.any.isRequired
};

export function Flashcards() {
    const [cards, setCards] = useState([]);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    // load previous flashcards from local storage
    useEffect(() => {
        loadFromLocalStorage();
    }, []);

    // load json data from local storage
    function loadFromLocalStorage() {
        try {
            const flashcards = JSON.parse(localStorage.getItem("flashcards-json"));
            setCards(flashcards.flashcards);
        } catch (err) {
            console.log(err);
        }
    }

    // save flashcard json data to local storage
    function saveToLocalStorage() {
        // create json object
        const flashcards = {
            "flashcards": cards
        };
        // write object
        localStorage.setItem("flashcards-json", JSON.stringify(flashcards));
        console.log(`Saved flashcards: ${JSON.stringify(flashcards)}`)
    }

    // add new flash card
    function addCard() {
        // check if card isn't empty
        if (question.trim() !== "" && answer.trim() !== "") {
            // add new card
            setCards(
                [
                    { question: question, answer: answer, id: cards.length },
                    ...cards
                ]
            );
            // update local storage
            saveToLocalStorage();

            // clear text area
            document.getElementsByClassName("flashcards-textarea")[0].value = '';
            document.getElementsByClassName("flashcards-textarea")[1].value = '';
            setAnswer('');
            setQuestion('');
        }
    }

    // download flash card json data
    function saveFlashcards() {
        // create json object
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
        // click event
        const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });

        // download file
        a.dispatchEvent(clickEvent);
        a.remove();
    }

    // load flashcards from json file
    function loadFlashcards(event) {
        // get file from file dialog event
        const file = event.target.files[0];
        if (!file) {
            alert("No file selected!");
            return;
        }

        // read the file
        const reader = new FileReader();
        reader.onload = () => {
            console.log(reader.result);

            // parse json cards
            try {
                const json = JSON.parse(reader.result);
                setCards(json.flashcards);
            } catch {
                alert(`Error parsing json: ${reader.result}`);
            }

            // update local storage
            saveToLocalStorage();
            console.log(cards);
        };

        // read json text data
        reader.readAsText(file);
    }

    return (
        <div className="flashcard-container">
            <div className="flashcard-left-panel">
                <div className="flashcard-left-panel-content-div">
                    <h1 className="flashcards-title">Flashcards</h1>
                    {/* file dialog interface */}
                    <div className="flashcards-left-panel-button-div">
                        <h3 className="flashcards-left-panel-h3">File Control</h3>
                        <div className="flashcards-buttons-div">
                            <button onClick={() => { saveFlashcards() }} className="flashcards-buttons blue-button">Save Flashcards</button>
                            <input type="file" id="file-input" accept=".json" onChange={(e) => { loadFlashcards(e) }} className="upload-flashcards flashcards-button blue-button" name="file-input" />
                            <label id="file-input-label" for="file-input" className="blue-button flashcards-buttons">Upload Flashcards</label>

                            <button className="flashcards-buttons blue-button" onClick={() => { setCards([]) }}>Clear Flashcards</button>
                        </div>
                        <div className="spacer"></div>
                    </div>

                    {/* flashcard creator interface */}
                    <div className="flashcards-left-panel-input-div">
                        <h3 className="flashcards-left-panel-h3">Questions Maker</h3>
                        <div className="flashcards-input-div">
                            <textarea placeholder="Input Question..." maxLength="1000" className="flashcards-textarea question-input" onChange={e => setQuestion(e.target.value)}></textarea>
                            <textarea placeholder="Input Answer..." maxLength="1000" className="flashcards-textarea answer-input" onChange={e => setAnswer(e.target.value)}></textarea>
                            <button className="flashcards-buttons green-button" onClick={addCard}>Add Card</button>
                        </div>
                    </div>
                </div>
            </div >
            <div className="flashcard-right-panel">
                {cards.map(card => <Flashcard question={card.question} answer={card.answer} cid={card.id} />)}
            </div>
        </div>
    );
}