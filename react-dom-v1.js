export function render(reactElement, rootElement) {
  //   console.log(reactElement);
  function createDOMElement(reactElement) {
    // console.log(reactElement.type);
    if (typeof reactElement.type === "function") {
      console.log(reactElement.type);
      return createDOMElement(reactElement.type(reactElement.props));
    }

    if (Array.isArray(reactElement)) {
      return reactElement.map((el) => createDOMElement(el));
    }

    if (typeof reactElement === "string") {
      return document.createTextNode(reactElement);
    }

    const { type, props } = reactElement;
    const DOMElement = document.createElement(type);
    if (props) {
      Object.entries(props).forEach(([key, value]) => {
        //   console.log(key, value);
        //   DOMElement[key] = value;
        if (key !== "children") DOMElement.setAttribute(key, value);
      });
      props.children?.forEach((child) => {
        if (Array.isArray(child)) {
          DOMElement.append(...child.map((el) => createDOMElement(el)));
        } else if (typeof child === "string") {
          DOMElement.append(document.createTextNode(child));
        } else {
          DOMElement.append(createDOMElement(child));
        }
      });
    }

    return DOMElement;
  }

  const DOMElement = createDOMElement(reactElement);
  //   console.log("DOMElement", DOMElement);
  if (Array.isArray(DOMElement)) {
    rootElement.append(...DOMElement);
  } else {
    rootElement.append(DOMElement);
  }
}

export default { render };
