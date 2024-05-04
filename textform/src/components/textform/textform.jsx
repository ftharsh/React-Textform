import React, { useState } from "react"; // import react hook use state from react
import PropTypes from "prop-types";

export default function Textform(props) {
  const handleUppercase = () => {
    console.log("button was clicked"); // everytime u clicked button , check the console
    let newText = text.toUpperCase(); // convert the text to uppercase
    setText(newText); // changing state
  };
  const handleOnchange = (event) => {
    setText(event.target.value); //use handle onchange so that it could  what ever we write in textarea it could b intialised to setText
  };
  const [text, setText] = useState("Enter your text here !");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnchange}
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleUppercase}
      >
        Convert to UPPERCASE
      </button>
    </div>
  );
}
