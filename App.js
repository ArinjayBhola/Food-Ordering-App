import React from "react";
import ReactDOM from "react-dom/client";

/* 
*const heading = document.createElement("h1");
*heading.innerHTML = "Hello World from JavaScript";
*const root = document.getElementById("root");
*root.appendChild(heading);

*const h1 = document.getElementsByTagName("h1")[0];
*h1.innerHTML = "Hello World by ReactJs";
*/

/*
*<div id="parent">
*   <div id="child1">
*       <h1></h1>
*       <h2></h2>
*   </div>
*   <div id="child2">
*       <h1></h1>
*       <h2></h2>
*   </div>
*</div>
*/

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child1" }, [
        React.createElement("h1", {}, "I am H1 tag"),
        React.createElement("h2", {}, "I am sibbliing")
    ]), React.createElement(
        "div",
        { id: "child2" }, [
        React.createElement("h1", {}, "I am H1 tag"),
        React.createElement("h2", {}, "I am sibbliing")
    ])]
);


// const heading = React.createElement(
//     "h1",
//     { id: "heading", className: "head" },
//     "Hello From React.js");

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);