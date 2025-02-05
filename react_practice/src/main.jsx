import React from "react";
import ReactDOM from "react-dom"

const fName = "Dr. Angela"
const lName = "Yu"
const randomNum = Math.floor(Math.random() * 40)
const angela = {
  name: "Dr. Angela Yu",
  currentYear: new Date().getFullYear(),
  example: "E.g"
}

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <h2>Your lucky number is {randomNum}</h2>
    <ul>
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>Python</li>
    </ul>
    <p>Created by {angela.name}</p>
    <p>Copyright {angela.currentYear}</p>
  </div>,
  document.getElementById("root"))

// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!";
// document.getElementById("root").appendChild(h1);

