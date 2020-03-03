import playerHeadshot from './assets/images/headshot.png';
import './style.scss';
import dragDrop from './dragDropFunc';


const players = [

  {
    name: 'Nic Naitanui',
    club: 'West Coast',
    games: 166,
  },
  {
    name: 'Josh Kennedy',
    club: 'West Coast',
    games: 243,
  },
  {
    name: 'Liam Ryan',
    club: 'West Coast',
    games: 37,
  },
  {
    name: 'Tim Kelly',
    club: 'West Coast',
    games: 48,
  },
  {
    name: 'Elliot Yeo',
    club: 'West Coast',
    games: 155,
  },
  {
    name: 'Jeremy McGovern',
    club: 'West Coast',
    games: 126,
  },
  {
    name: 'Nat Fyfe',
    club: 'Fremantle',
    games: 173,
  },
  {
    name: 'Michael Walters',
    club: 'Fremantle',
    games: 151,
  },
  {
    name: 'David Mundy',
    club: 'Fremantle',
    games: 299,
  },
  {
    name: 'Jesse Hogan',
    club: 'Fremantle',
    games: 83,
  },
  {
    name: 'Irving Mosquito',
    club: 'Essendon',
    games: 0,
  },
  {
    name: 'Cale Hooker',
    club: 'Essendon',
    games: 153,
  },
  {
    name: 'Lance Franklin',
    club: 'Sydney',
    games: 300,
  },
  {
    name: 'Patrick Cripps',
    club: 'Carlton',
    games: 101,
  },
  {
    name: 'Stephen Coniglio',
    club: 'Greater Western Sydney',
    games: 131,
  },
  {
    name: 'Bradley Hill',
    club: 'St Kilda',
    games: 149,
  },
  {
    name: 'Mitch Duncan',
    club: 'Geelong',
    games: 203,
  },
  {
    name: 'Jaeger OMeara',
    club: 'Hawthorn',
    games: 92,
  },


];

function elementAttributeAppend(elementName, attributeType, attributeName, parentContainer) {
  const att = document.createAttribute(attributeType);
  att.value = attributeName;
  elementName.setAttributeNode(att);
  parentContainer.appendChild(elementName);
}

function elementInner(element, inner, parentContainer) {
  element.innerHTML = inner;
  parentContainer.appendChild(element);
}

const container = document.createElement('div');
elementAttributeAppend(container, 'id', 'container', document.body);

const headline = document.createElement('h1');
elementInner(headline, 'Choose your WA State of Origin team', container);

const team = document.createElement('div');
elementAttributeAppend(team, 'id', 'team', container);

const back = document.createElement('h3');
elementInner(back, 'BACK', team);

const mainTeam = document.createElement('div');
elementAttributeAppend(mainTeam, 'id', 'main-team', team);

const forward = document.createElement('h3');
elementInner(forward, 'FORWARD', team);

const followersHead = document.createElement('h3');
elementInner(followersHead, 'Followers', team);

const followers = document.createElement('div');
elementAttributeAppend(followers, 'id', 'followers', team);

const interchangeHead = document.createElement('h3');
elementInner(interchangeHead, 'Interchange', team);

const interchange = document.createElement('div');
elementAttributeAppend(interchange, 'id', 'interchange', team);

const squad = document.createElement('div');
elementAttributeAppend(squad, 'id', 'squad', container);

const playersHead = document.createElement('h2');
elementInner(playersHead, 'Players', squad);

const playerContainer = document.createElement('div');
elementAttributeAppend(playerContainer, 'id', 'playerContainer', squad);
elementAttributeAppend(playerContainer, 'class', 'container', squad);

for (let i = 0; i < 15; i++) {
  const position = document.createElement('div');
  position.setAttribute('class', 'pos container');
  position.setAttribute('data-capacity', '');
  mainTeam.appendChild(position);
}

for (let i = 0; i < 3; i++) {
  const position = document.createElement('div');
  position.setAttribute('class', 'pos container');
  position.setAttribute('data-capacity', '');
  followers.appendChild(position);
}

for (let i = 0; i < 3; i++) {
  const position = document.createElement('div');
  position.setAttribute('class', 'pos container');
  position.setAttribute('data-capacity', '');
  interchange.appendChild(position);
}

players.forEach((player) => {
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

dragDrop();
