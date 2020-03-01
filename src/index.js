import { Sortable } from '@shopify/draggable';

import playerHeadshot from './assets/images/headshot.png'

const players = [
    
    {
        name: 'Nic Naitanui',
        club: 'West Coast',
        games: 166
    },
    {
        name: 'Josh Kennedy',
        club: 'West Coast',
        games: 243
    },
    {
        name: 'Liam Ryan',
        club: 'West Coast',
        games: 37
    },
    {
        name: 'Tim Kelly',
        club: 'West Coast',
        games: 48
    },
    {
        name: 'Elliot Yeo',
        club: 'West Coast',
        games: 155
    },
    {
        name: 'Jeremy McGovern',
        club: 'West Coast',
        games: 126
    },
    {
        name: 'Nat Fyfe',
        club: 'Fremantle',
        games: 173
    },
    {
        name: 'Michael Walters',
        club: 'Fremantle',
        games: 151
    },
    {
        name: 'David Mundy',
        club: 'Fremantle',
        games: 299
    },
    {
        name: 'Jesse Hogan',
        club: 'Fremantle',
        games: 83
    },
    {
        name: 'Irving Mosquito',
        club: 'Essendon',
        games: 0
    },
    {
        name: 'Cale Hooker',
        club: 'Essendon',
        games: 153
    },
    {
        name: 'Lance Franklin',
        club: 'Sydney',
        games: 300
    },
    {
        name: 'Patrick Cripps',
        club: 'Carlton',
        games: 101
    },
    {
        name: 'Stephen Coniglio',
        club: 'Greater Western Sydney',
        games: 131
    },
    {
        name: 'Bradley Hill',
        club: 'St Kilda',
        games: 149
    },
    {
        name: 'Mitch Duncan',
        club: 'Geelong',
        games: 203
    },
    {
        name: 'Jaeger OMeara',
        club: 'Hawthorn',
        games: 92
    },


];

const mainTeam = document.getElementById('main-team');

for (let i = 0; i < 15; i++) {
    const position = document.createElement('div');
    position.setAttribute('class', 'pos container');
    position.setAttribute('data-capacity', '');
    mainTeam.appendChild(position);
    
}

const followers = document.getElementById('followers')

for (let i = 0; i < 3; i++) {
    const position = document.createElement('div');
    position.setAttribute('class', 'pos container');
    position.setAttribute('data-capacity', '');
    followers.appendChild(position);
}

const interchange = document.getElementById('interchange')

for (let i = 0; i < 3; i++) {
    const position = document.createElement('div');
    position.setAttribute('class', 'pos container');
    position.setAttribute('data-capacity', '');
    interchange.appendChild(position);
}



const containers = document.querySelectorAll('.container')

const sortable = new Sortable(containers, {
    draggable: '.player',
});

let capacityReached;
    
sortable.on('drag:stop', (evt) => {

    let posContainerChildren = sortable.getDraggableElementsForContainer(evt.source.parentElement).length
    let capacityStatus = evt.source.parentElement.dataset.capacity
    if (posContainerChildren > 0){
    capacityStatus = 'true';
    } else {
    capacityStatus = '';
    }
    capacityReached = capacityStatus
});


sortable.on('sortable:sort', (evt) => {
    if (!capacityReached) {
    return;
    } else if  (capacityReached && evt.dragEvent.overContainer.children.length === 1) {
    evt.cancel();
    }

});

const playerContainer = document.getElementById('playerContainer');

players.forEach(player => {
    const playerDiv = document.createElement('div');
    playerContainer.appendChild(playerDiv);
    playerDiv.setAttribute('class', 'player');
    const pic = document.createElement('img');
    pic.setAttribute('class', 'headshot');
    pic.src = playerHeadshot;
    playerDiv.appendChild(pic);
    const name = document.createElement('p');
    name.innerHTML = player.name;
    playerDiv.appendChild(name);
    
});