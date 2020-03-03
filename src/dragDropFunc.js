import { Sortable } from '@shopify/draggable';

export default function dragDrop() {
  const containers = document.querySelectorAll('.container');

  const sortable = new Sortable(containers, {
    draggable: '.player',
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
