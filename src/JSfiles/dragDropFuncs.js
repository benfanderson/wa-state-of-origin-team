import { Sortable, Plugins } from '@shopify/draggable';

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
  // eslint-disable-next-line max-len
    const posContainerChildren = sortable.getDraggableElementsForContainer(evt.source.parentElement).length;
    let capacityStatus = evt.source.parentElement.dataset.capacity;
    if (posContainerChildren > 0) {
      capacityStatus = 'true';
    } else {
      capacityStatus = '';
    }
    capacityReached = capacityStatus;
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
