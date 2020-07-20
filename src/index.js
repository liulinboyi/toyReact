import {
  ToyReact
} from '../toy-react';

class Mycomponent {

}

// let a = < Mycomponent name = "a" / > ;
let a = <div name="a">
  <span>hello</span>
  <span>haha</span>
  <span>huhu</span>
</div>

console.log(a)

document.body.appendChild(a)
