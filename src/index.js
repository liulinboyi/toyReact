import {
  ToyReact
} from '../toy-react';

class Mycomponent {

}

// let a = < Mycomponent name = "a" / > ;
// 在javascript中把Dom元素当做一等公民去使用，可以做函数、方法参数，可以做返回值可以赋值给变量
let a = <div name="a">
  <span>hello</span>
  <span>haha</span>
  <span>huhu</span>
</div>

console.log(a)

document.body.appendChild(a)
