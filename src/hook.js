import ToyReact, { Component } from "../toy-react";

let state = [];
let setters = [];
let firstRun = true;
let cursor = 0;

function createSetter(cursor) {
  return function setterWithCursor(newVal) {
    state[cursor] = newVal;
    render();
  };
}

// This is the pseudocode for the useState helper
export function useState(initVal) {
  if (firstRun) {
    state.push(initVal);
    setters.push(createSetter(cursor));
    firstRun = false;
  }

  const setter = setters[cursor];
  const value = state[cursor];

  cursor++;
  return [value, setter];
}

// Our component code that uses hooks
function RenderFunctionComponent() {
  debugger
  const [firstName, setFirstName] = useState("Rudi"); // cursor: 0
  const [lastName, setLastName] = useState("Yardley"); // cursor: 1

  return (
    <div>
      <button onClick={() => setFirstName("Richard")}>Richard</button>
      <button onClick={() => setFirstName("Fred")}>Fred</button>
      <span>{firstName}</span>
      <span>{lastName}</span>
    </div>
  );
}

// This is sort of simulating Reacts rendering cycle
function MyComponent() {
  cursor = 0; // resetting the cursor
  return <RenderFunctionComponent />; // render
}

function render() {
  ToyReact.render(<MyComponent />, document.body);
}

render();

// console.log(state); // Pre-render: []
// MyComponent();
// console.log(state); // First-render: ['Rudi', 'Yardley']
// MyComponent();
// console.log(state); // Subsequent-render: ['Rudi', 'Yardley']

// click the 'Fred' button

// console.log(state); // After-click: ['Fred', 'Yardley']
