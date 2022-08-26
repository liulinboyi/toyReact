import ToyReact, {Component} from '../toy-react';


class Board extends Component {
  constructor(props) {
    super(props);
  }
  renderSquare(i) {
    console.log(this.props.squares[i], 'this.props.squares[i]', i, this.props);
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    console.log('Board')
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
class Square extends Component {
  constructor(props) {
      super(props);
      this.state = {
          value: null,
      };
  }
  render() {
    console.log(this.props, 'props')
    console.log('Square')
      return (
        <button className="square" onClick={this.props.onClick}>
        {this.props.value ? this.props.value : ''}
        </button>
      );
  }
}


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice(); // ?
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    // debugger
    let newHistory = history.concat([
      {
        'squares': squares
      }
    ])
    this.setState({
      history: newHistory,
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
    console.log(this.state.history, 'this.state.history')
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    console.log('Game')
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    console.log(history, current, 'Game');
    /*
          <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    */
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


// class Mycomponent extends Component {
//   render() {
//     return <div>
//     <span>hello</span>
//     <div>{this.children}</div>
//     <span>123456</span>
//     </div> 
//   }
//  // 方法提取出去了
// }

// let a = < Mycomponent name = "a" / > ;
// 在javascript中把Dom元素当做一等公民去使用，可以做函数、方法参数，可以做返回值可以赋值给变量
// let a = <div name="a">
//   <span>hello</span>
//   <span>haha</span>
//   <span>huhu</span>
// </div>

// let a = <Mycomponent name="a">
// <div>children</div>
// </Mycomponent>

// let a = <Game />

class App extends Component {
  render() {
    console.log('App')
    return <Game />
  }
}

let a = <App />
console.log(a)
ToyReact.render(a, document.body)




/** 
 * 
 * 
 * let a = <div name="a">
  <span>hello</span>
  <span>haha</span>
  <span>huhu</span>
</div>

console.log(a)

document.body.appendChild(a)


 * 上面代码等价于
 * var a = _toy_react__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", {
  name: "a"
}, 
_toy_react__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("span", null, "hello"), _toy_react__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("span", null, "haha"), _toy_react__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("span", null, "huhu"));

console.log(a);
document.body.appendChild(a);
 * 
*/
