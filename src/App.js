import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "🖤": "Black Heart",
  "💜": "Purple Heart",
  "💚": "Green Heart",
  "🧡": "Orange Heart",
  "💛": "Yellow Heart",
  "🤍": "White Heart",
  "💙": "Blue Heart",
  "💔": "Broken Heart",
  "💝": "Heart with Ribbon",
  "🤎": "Brown Heart",
  "💕": "Two Hearts",
  "💖": "Sparkling Heart",
  "💞": "Spinning Hearts",
  "💘": "Heart with Arrow"
};

var knownEmojis = Object.keys(emojiDictionary);

export default function App() {
  var [emojiMeaning, setemojiMeaning] = useState("");

  function emojiInterpretor(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiDictionary[userInput];
    if (emojiMeaning === undefined) {
      emojiMeaning = "Sorry , this emoji isn't in our records.";
    }
    setemojiMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setemojiMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h2>Emoji Interpretor</h2>
      <input onChange={emojiInterpretor} />
      <br />
      <p>{emojiMeaning}</p>
      <br />
      <div className="known">
        <h3>Emojis we know</h3>
        {knownEmojis.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                cursor: "pointer",
                fontSize: "1.5rem",
                padding: "0.5rem"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
