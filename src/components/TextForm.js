import React, { useState } from "react";

export default function TextForm(props) {
  const handleupperclick = () => {
    // console.log("uppercase was click" + text);
    const newtext = text.toUpperCase();
    setText(newtext);
  };

  const handlelowerclick = () => {
    const newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleclearclick = () => {
    const newtext = "";
    setText(newtext);
  };
  const handleExtraspacesclick = () => {
    var newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };

  const handleOnChange = (event) => {
    // console.log("uppercase was click");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="my-box"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleupperclick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handlelowerclick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleclearclick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraspacesclick}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="container my-3"></div>
    {/* h1 heading the summary */}
    <h1>your text summary</h1>
    {/* length the word and length the character */}
    <b>{text.split(" ").length} words, {text.length} characters</b>
    {/* count the word of reading timing */}
    <b>{0.008 * text.split(" ").length} Minutes to read</b>
    <h2>Preview</h2>
    {/* preview the text as you write the text area */}
    <p>{text}</p>
    </>
  );
}
