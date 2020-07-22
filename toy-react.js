// 给type一个wrapper来处理
let childrenSymbol = Symbol('children');

class Elementwrapper {
  constructor(type) {
    this.type = type
    this[childrenSymbol] = []
    this.props = Object.create(null)
    this.children = []
    // this.placeholder = document.createElement("placeholder");
    // this.root = document.createElement(type)
  }
  setAttribute(name, value) {
    // if (name.match(/^on([\s\S]+)$/)) {
    //   const eventName = RegExp.$1.replace(/^[\s\S]/, (s) => s.toLowerCase());
    //   this.root.addEventListener(eventName, value);
    // }
    // if (name === "className") name = "class";
    // this.root.setAttribute(name, value);

    this.props[name] = value
  }
  // get children() {
  //   return this[childrenSymbol].map(child => child.vdom)
  // }
  appendChild(vchild) {
    this[childrenSymbol].push(vchild)
    this.children.push(vchild.vdom)
    // 不是真实child是虚拟child
    // const range = document.createRange();
    // if (this.root.children.length) {
    //   range.setStartAfter(this.root.lastChild);
    //   range.setEndAfter(this.root.lastChild);
    // } else {
    //   range.setStart(this.root, 0);
    //   range.setEnd(this.root, 0);
    // }
    // vchild.mountTo(range);
  }
  get vdom() {
    return this
  }
  mountTo(range) { // 真正的parent元素
    // range.deleteContents();
    // range.insertNode(this.root); // 讲生命周期时会大幅修改这里的代码

    this.range = range
    // this.placeholder = document.createElement("placeholder");
    // let endRange = document.createRange();
    // endRange.setStart(range.endContainer, range.endOffset);
    // endRange.setEnd(range.endContainer, range.endOffset);
    // endRange.insertNode(this.placeholder);
    this.range.deleteContents();

    let element = document.createElement(this.type)

    for (const name in this.props) {
      let value = this.props[name]
      if (name.match(/^on([\s\S]+)$/)) {
        const eventName = RegExp.$1.replace(/^[\s\S]/, (s) => s.toLowerCase());
        element.addEventListener(eventName, value);
      }
      if (name === "className") {
        element.setAttribute("class", value)
      }
      element.setAttribute(name, value);
    }

    for (const child of this.children) {
      const range = document.createRange();
      if (element.children.length) {
        range.setStartAfter(element.lastChild);
        range.setEndAfter(element.lastChild);
      } else {
        range.setStart(element, 0);
        range.setEnd(element, 0);
      }
      child.mountTo(range)
    }
    range.insertNode(element)
  }
}

export class Component { // 提取公共方法
  constructor() {
    this.children = []
    this.props = Object.create(null)
  }
  get type() {
    return this.constructor.name
  }
  setAttribute(name, value) {
    if (name.match(/^on([\s\S]+)$/)) {
      // console.log(RegExp.$1)
    }
    // 虚拟dom上的属性
    this[name] = value
    this.props[name] = value
  }
  mountTo(range) {
    // let vdom = this.render()
    // vdom.mountTo(parent)
    this.range = range;
    this.update();
  }
  update() {




    // let vdom = this.vdom
    // if (this.oldVdom) {
    //   let isSameNode = (node1, node2) => {
    //     if (node1.type !== node2.type) {
    //       return false;
    //     }
    //     for (let name in node1.props) {
    //       //    if(typeof node1.props[name] === " function" 
    //       //    && typeof node2.props[name] === " function"
    //       //    && node1.props[name].toString() === node2.props[name].toString()
    //       //    ){
    //       //        continue;
    //       //    }
    //       if (typeof node1.props[name] === "object" &&
    //         typeof node2.props[name] === "object" &&
    //         JSON.stringify(node1.props[name]) === JSON.stringify(node2.props[name])
    //       ) {
    //         continue;
    //       }
    //       if (node1.props[name] !== node2.props[name]) {
    //         return false;
    //       }
    //     }

    //     if (Object.keys(node1.props).length !== Object.keys(node2.props).length)
    //       return false;

    //     return true;
    //   }

    //   let isSameTree = (node1, node2) => {
    //     if (!isSameNode(node1, node2)) {
    //       return false;
    //     }
    //     if (node1.children.length !== node2.children.length) {
    //       return false;
    //     }
    //     for (let i = 0; i < node1.children.length; i++) {
    //       if (!isSameNode(node1.children[i], node2.children[i]))
    //         return false;
    //     }
    //     return true;
    //   }

    //   let replace = (newTree, oldTree, indent) => {
    //        console.log(indent + "new", newTree);
    //        console.log(indent + "old", oldTree);

    //     if (isSameTree(newTree, oldTree)) {
    //       console.log("all same");
    //       return;
    //     }

    //     if (!isSameNode(newTree, oldTree)) {
    //       console.log("all different");
    //       newTree.mountTo(oldTree.range);
    //     } else {
    //       for (let i = 0; i < newTree.children.length; i++) {
    //         replace(newTree.children[i], oldTree.children[i], " " + indent)
    //       }
    //     }
    //   }

    //   replace(vdom, this.oldVdom, "");
    // } else {
    //   vdom.mountTo(this.range);
    // }
    // this.oldVdom = vdom;



    /*
    暴力替换
    */
    this.vdom.mountTo(this.range);
    console.log(this.vdom, 'this.vdom');



    // let placeholder = document.createElement("placeholder");
    // let range = document.createRange();
    // range.setStart(this.range.endContainer, this.range.endOffset);
    // range.setEnd(this.range.endContainer, this.range.endOffset);
    // range.insertNode(placeholder);
    // this.range.deleteContents();

    // let vdom = this.render();
    // vdom.mountTo(this.range);
    // placeholder.parentNode.removeChild(placeholder);
  }
  appendChild(vchild) {
    this.children.push(vchild)
  }
  get vdom() {
    const vdom = this.render()
    return vdom
  }
  setState(state) {
    let merge = (oldState, newState) => {
      for (const p in newState) {
        if (Object.prototype.toString.call(newState[p]) === '[object Object]') { // 判断 是对象并且不是null和数组
          if (typeof oldState[p] !== 'object') {
            // debugger
            oldState[p] = {}
          }
          merge(oldState[p], newState[p])
        } else if (Object.prototype.toString.call(newState[p]) === '[object Array]') {
          if (!Array.isArray(oldState[p])) {
            // debugger
            oldState[p] = []
          }
          merge(oldState[p], newState[p])
        } else {
          oldState[p] = newState[p]
        }
      }
    }
    if (!this.state && state) {
      debugger
      this.state = {}
    }
    merge(this.state, state)
    // console.log(this.state);
    this.update()
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content)
    this.type = "#text"
    this.children = []
    this.props = Object.create(null)
  }
  mountTo(range) { // 真正的parent元素
    // debugger
    // parent.appendChild(this.root) // 讲生命周期时会大幅修改这里的代码
    this.range = range
    range.deleteContents();
    range.insertNode(this.root);
  }
  get vdom() {
    return this
  }
}

let ToyReact = {
  // type 可能是string（普通标签）、class
  // attributes 属性
  // children 子元素 数目不定
  createElement(type, attributes, ...children) {
    // debugger
    // console.log(arguments) // 参数
    let element;
    if (typeof type === 'string') { // 普通元素
      element = new Elementwrapper(type);
    } else { // 虚拟dom
      element = new type();
    }
    // console.log(element, 'element');
    // let element = document.createElement(type)
    for (const attr in attributes) {
      element.setAttribute(attr, attributes[attr])
    }
    let insertChildren = (children) => {
      for (let child of children) {
        if (typeof child === "object" && child instanceof Array) {
          insertChildren(child);
        } else {
          if (!(child instanceof Component) &&
            !(child instanceof Elementwrapper) &&
            !(child instanceof TextWrapper)) {
            child = String(child);
          }
          if (typeof child === "string") {
            child = new TextWrapper(child);
          }
          element.appendChild(child)
        }
      }
    }
    insertChildren(children);
    // document.body.appendChild(element)
    return element
  },
  render(vdom, element) {
    // vdom.mountTo(element) // 设计一个mountTo方法 vdom里面去做mountTo这件事情
    // element.appendChild(vdom) // 如果是实Dom

    let range = document.createRange();
    if (element.children.length) {
      range.setStartAfter(element.lastChild);
      range.setEndAfter(element.lastChild);
    } else {
      range.setStart(element, 0);
      range.setEnd(element, 0);
    }
    vdom.mountTo(range);
  }
}

ToyReact.Component = Component

export default ToyReact