export function elementAttributeAppend(elementName, attributeType, attributeName, parentContainer) {
  const att = document.createAttribute(attributeType);
  att.value = attributeName;
  elementName.setAttributeNode(att);
  parentContainer.appendChild(elementName);
}

export function elementInner(elementName, attributeType, attributeName, inner, parentContainer) {
  const att = document.createAttribute(attributeType);
  att.value = attributeName;
  elementName.setAttributeNode(att);
  elementName.innerHTML = inner;
  parentContainer.appendChild(elementName);
}
