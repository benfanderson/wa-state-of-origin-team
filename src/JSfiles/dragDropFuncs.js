import { Sortable, Plugins } from '@shopify/draggable';
import placeholder from '../assets/images/placeholder1.png';

export function dragDrop() {
  const containers = document.querySelectorAll('.container');

  const sortable = new Sortable(containers, {
    draggable: '.player',
    mirror: {
      constrainDimensions: true,
    },
    plugins: [Plugins.ResizeMirror],
  });

  let capacityReached;

  sortable.on('drag:stop', (evt) => {
    if (evt.source.parentElement.classList.contains('pos')) {
      const firstInitial = evt.originalSource.lastChild.innerHTML.charAt(0);
      const lastName = evt.originalSource.lastChild.innerHTML.split(' ')[1];
      evt.originalSource.lastChild.innerHTML = `${firstInitial}. ${lastName}`;
      evt.originalSource.lastChild.style.color = '#e1dd10';
      evt.originalSource.lastChild.style.backgroundColor = 'black';
      evt.originalSource.lastChild.style.padding = '1.5%';
    }

    if (evt.source.parentElement.hasAttribute('id')) {
      evt.originalSource.lastChild.innerHTML = evt.originalSource.fullName;
      evt.originalSource.lastChild.style.color = 'black';
      evt.originalSource.lastChild.style.backgroundColor = 'white';
      evt.originalSource.lastChild.style.padding = '0';
    }
    // eslint-disable-next-line max-len
    const posContainerChildren = sortable.getDraggableElementsForContainer(evt.source.parentElement).length;
    let capacityStatus = evt.source.parentElement.dataset.capacity;
    if (posContainerChildren > 0) {
      capacityStatus = 'true';
    } else {
      capacityStatus = '';
    }
    capacityReached = capacityStatus;

    if (evt.source.parentElement.children.length > 0 && evt.source.parentElement.classList.contains('pos')) {
      evt.source.parentElement.style.backgroundImage = 'none';
    }
  });

  sortable.on('drag:start', (evt) => {
    if (evt.source.parentElement.classList.contains('pos')) {
      evt.source.parentElement.style.backgroundImage = `url(${placeholder})`;
    }
  });


  sortable.on('sortable:sort', (evt) => {
    if (!capacityReached) {
      return;
    }

    if (capacityReached && evt.dragEvent.overContainer.children.length === 1) {
      evt.cancel();
    }
  });
}

export function createDropZones(length, parentContainer) {
  for (let i = 0; i < length; i++) {
    const position = document.createElement('div');
    position.setAttribute('class', 'pos container');
    position.setAttribute('data-capacity', '');
    parentContainer.appendChild(position);
  }
}
