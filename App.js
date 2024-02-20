// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
// const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(heading);

//     <script>
//     document.querySelector(".root").innerHTML = "<h1>kishan</h1>";
//   </script>
// console.log(heading);
// console.log(root);

/*
*<div id="parent">
      <div id="child">
      <h1>I'm h1 tag</h1>
      <h2>I'm h2 tag</h2>
      </div>
 </div>     
*/

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag")
        ]
    )
)
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(parent);

