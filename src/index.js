import {
  ToyReact
} from '../toy-react';

class Mycomponent {
  render() {
    return <div>hello</div> 
  }
  setAttribute(name, value) {
    // 虚拟dom上的属性
    this[name] = value
  }
  mounTo(parent) {
    let vdom = this.render()
    vdom.mounTo(parent)
  }
}

// let a = < Mycomponent name = "a" / > ;
// 在javascript中把Dom元素当做一等公民去使用，可以做函数、方法参数，可以做返回值可以赋值给变量
// let a = <div name="a">
//   <span>hello</span>
//   <span>haha</span>
//   <span>huhu</span>
// </div>

let a = <Mycomponent name="a">
</Mycomponent>

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
