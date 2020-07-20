export let ToyReact = {
  // type 可能是string（普通标签）、class
  // attributes 属性
  // children 子元素 数目不定
  createElement(type, attributes, ...children) {
    // debugger
    console.log(arguments) // 参数
    let element = document.createElement(type)
    for (const attr in attributes) {
      element.setAttribute(attr, attributes[attr])
    }
    for (const child of children) {
      // 可能为字符串
      if (typeof child === 'string') {
        child = document.createTextNode(child)
      }
      element.appendChild(child)
    }
    // document.body.appendChild(element)
    return element
  }
}