// 给type一个wrapper来处理

class Elementwrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  appendChild(vchild) {
    // 不是真实child是虚拟child
    vchild.mounTo(this.root)
  }
  mounTo(parent) { // 真正的parent元素
    parent.appendChild(this.root) // 讲生命周期时会大幅修改这里的代码
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content)
  }
  mounTo(parent) { // 真正的parent元素
    // debugger
    parent.appendChild(this.root) // 讲生命周期时会大幅修改这里的代码
  }
}

export let ToyReact = {
  // type 可能是string（普通标签）、class
  // attributes 属性
  // children 子元素 数目不定
  createElement(type, attributes, ...children) {
    // debugger
    console.log(arguments) // 参数
    let element;
    if (typeof type === 'string') { // 普通元素
      element = new Elementwrapper(type);
    } else { // 虚拟dom
      element = new type();
    }
    console.log(element, 'element');
    // let element = document.createElement(type)
    for (const attr in attributes) {
      element.setAttribute(attr, attributes[attr])
    }
    for (const child of children) {
      // 可能为字符串
      if (typeof child === 'string') {
        child = new TextWrapper(child)
      }
      element.appendChild(child)
    }
    // document.body.appendChild(element)
    return element
  },
  render(vdom, element) {
    vdom.mounTo(element) // 设计一个mounto方法 vdom里面去做mounto这件事情
    // element.appendChild(vdom) // 如果是实Dom
  }
}