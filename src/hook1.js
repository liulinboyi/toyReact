import ToyReact, { Component } from "../toy-react";

let state = [];
let index = 0;
function useState(initialState) {
  console.log("index", index); // 观察
  let currentIndex = index;
  state[currentIndex] = state[currentIndex] || initialState;
  function setState(newState) {
    state[currentIndex] = newState;
    render();
  }
  index += 1;
  return [state[currentIndex], setState];
}

function Counter() {
  let [count, setCount] = useState(0); // 第一个useState的索引index
  let [num, setNum] = useState(0); // 第二个useState的索引index
  let [count1, setCount1] = useState(0); // 第三个useState的索引index
  let [num1, setNum1] = useState(0); // 第四个useState的索引index
  return (
    <div>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function render() {
  index = 0;
  ToyReact.render(<Counter />, document.querySelector("#root"));
}
render();