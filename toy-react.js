// 给type一个wrapper来处理

class Elementwrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }
  setAttribute(name, value) {
    if (name.match(/^on([\s\S]+)$/)) {
      const eventName = RegExp.$1.replace(/^[\s\S]/, (s) => s.toLowerCase());
      this.root.addEventListener(eventName, value);
    }
    if (name === "className") name = "class";
    this.root.setAttribute(name, value);
  }
  appendChild(vchild) {
    // 不是真实child是虚拟child
    const range = document.createRange();
    if (this.root.children.length) {
      range.setStartAfter(this.root.lastChild);
      range.setEndAfter(this.root.lastChild);
    } else {
      range.setStart(this.root, 0);
      range.setEnd(this.root, 0);
    }
    vchild.mountTo(range);
  }
  mountTo(range) { // 真正的parent元素
    range.deleteContents();
    range.insertNode(this.root); // 讲生命周期时会大幅修改这里的代码
  }
}

export class Component { // 提取公共方法
  constructor() {
    this.children = []
    this.props = Object.create(null)
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
    let placeholder = document.createElement("placeholder");
    let range = document.createRange();
    range.setStart(this.range.endContainer, this.range.endOffset);
    range.setEnd(this.range.endContainer, this.range.endOffset);
    range.insertNode(placeholder);
    this.range.deleteContents();
    let vdom = this.render();
    vdom.mountTo(this.range);
    // placeholder.parentNode.removeChild(placeholder);
  }
  appendChild(vchild) {
    this.children.push(vchild)
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
  }
  mountTo(range) { // 真正的parent元素
    // debugger
    // parent.appendChild(this.root) // 讲生命周期时会大幅修改这里的代码
    range.deleteContents();
    range.insertNode(this.root);
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