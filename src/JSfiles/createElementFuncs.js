export function elementAttributeAppend(elementName, attributeType, attributeName, parentContainer) {
  const att = document.createAttribute(attributeType);
  att.value = attributeName;
  elementName.setAttributeNode(att);
  parentContainer.appendChild(elementName);
}

export function elementInner(element, inner, parentContainer) {
  element.innerHTML = inner;
  parentContainer.appendChild(element);
}
