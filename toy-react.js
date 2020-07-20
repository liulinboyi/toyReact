export let ToyReact = {
  // type 可能是string（普通标签）、class
  // attributes 属性
  // children 子元素 数目不定
  createElement(type, attributes, ...children) {
    // debugger
    console.log(arguments) // 参数
    return document.createElement(type)
  }
}