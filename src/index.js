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

function makeElement(elementName, attributeType, attributeName, parentContainer) {
  const att = document.createAttribute(attributeType);
  att.value = attributeName;
  elementName.setAttributeNode(att);
  parentContainer.appendChild(elementName);
}


const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

const headline = document.createElement('h1');
headline.innerHTML = 'Choose your WA State of Origin team';
container.appendChild(headline);

const team = document.createElement('div');
makeElement(team, 'id', 'team', container);

const back = document.createElement('h3');
back.innerHTML = 'BACK';
team.appendChild(back);

const mainTeam = document.createElement('div');
makeElement(mainTeam, 'id', 'main-team', team);

const forward = document.createElement('h3');
forward.innerHTML = 'FORWARD';
team.appendChild(forward);

const followersHead = document.createElement('h3');
followersHead.innerHTML = 'Followers';
team.appendChild(followersHead);

const followers = document.createElement('div');
makeElement(followers, 'id', 'followers', team);

const interchangeHead = document.createElement('h3');
interchangeHead.innerHTML = 'Interchange';
team.appendChild(interchangeHead);

const interchange = document.createElement('div');
makeElement(interchange, 'id', 'interchange', team);

const squad = document.createElement('div');
makeElement(squad, 'id', 'squad', container);

const playersHead = document.createElement('h2');
playersHead.innerHTML = 'Players';
squad.appendChild(playersHead);

const playerContainer = document.createElement('div');
makeElement(playerContainer, 'id', 'playerContainer', squad);
makeElement(playerContainer, 'class', 'container', squad);

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
