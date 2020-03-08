export function elementAttributeAppend(elementName, attributeType, attributeName, parentContainer) {
  const att = document.createAttribute(attributeType);
  att.value = attributeName;
  elementName.setAttributeNode(att);
  parentContainer.appendChild(elementName);
}

export function elementInner(element, attributeType, attributeName, inner, parentContainer) {
  const att = document.createAttribute(attributeType);
  att.value = attributeName;
  element.setAttributeNode(att);
  element.innerHTML = inner;
  parentContainer.appendChild(element);
}
