import React, { useState } from "react";
import { Display } from "../components/Display";

export const Generator = () => {
  // password length
  const [lengthPass, setLengthPass] = useState(8);
  // generated password
  const [password, setPassword] = useState("");
  // options
  const [checkUpper, setCheckUpper] = useState(false);
  const [checkLower, setCheckLower] = useState(false);
  const [checkNumber, setCheckNumber] = useState(false);
  const [checkSymbol, setCheckSymbol] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    let numbers = "0123456789";
    let symbols = "!@#$%^&*()";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";

    let chars = '';

    checkNumber ? (chars += numbers) : "";
    checkSymbol ? (chars += symbols) : "";
    checkUpper ? (chars += upper) : "" ;
    checkLower ? (chars += lower) : "";

    generatePass(chars);
  };

  const generatePass = (characters) => {
    let tempPass = '';

    for(let i = 0; i < lengthPass; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        tempPass += characters.substring(randomNumber, randomNumber + 1);
    }

    setPassword(tempPass);
  }

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className="mt-5">Password Generator</h1>
      <div className="card p-5 m-5 mt-1">
        <Display password={password} />
        <form className="mt-4" onSubmit={onSubmit}>
          <label
            htmlFor="pass-range"
            className="d-flex justify-content-between"
          >
            <span>Character Length</span> {lengthPass}
          </label>
          <input
            className="sliderGreen"
            id="pass-range"
            type="range"
            min={8}
            max={18}
            value={lengthPass}
            onChange={(e) => setLengthPass(e.target.value)}
            style={{ width: 20 + "em" }}
          />
          <div className="d-flex flex-column align-items-left">
            <label className="mt-2" htmlFor="uppercase">
              <input onChange={(e) => setCheckUpper(e.target.checked)} type="checkbox" id="uppercase" /> Include Uppercase Letters
            </label>
            <label className="mt-2" htmlFor="lowercase">
              <input onChange={(e) => setCheckLower(e.target.checked)} type="checkbox" id="lowercase" /> Include Lowercase Letters
            </label>
            <label className="mt-2" htmlFor="number">
              <input onChange={(e) => setCheckNumber(e.target.checked)} type="checkbox" id="number" /> Include Numbers{" "}
            </label>
            <label className="mt-2" htmlFor="symbol">
              <input onChange={(e) => setCheckSymbol(e.target.checked)} type="checkbox" id="symbol" /> Include Symbols{" "}
            </label>
            <button
              className="btn btn-primary mt-3"
              style={{ width: 20 + "em" }}
              type="submit"
            >
              Generate Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
