import playerHeadshot from '../assets/images/headshot.png';
import '../style.scss';
import { dragDrop, createDropZones } from './dragDropFuncs';
import { elementAttributeAppend, elementInner } from './createElementFuncs';

const players = [

  {
    surname: 'Naitanui',
    club: 'West Coast',
    games: 166,
  },
  {
    surname: 'Kennedy',
    club: 'West Coast',
    games: 243,
  },
  {
    surname: 'Ryan',
    club: 'West Coast',
    games: 37,
  },
  {
    surname: 'Kelly',
    club: 'West Coast',
    games: 48,
  },
  {
    surname: 'Yeo',
    club: 'West Coast',
    games: 155,
  },
  {
    surname: 'McGovern',
    club: 'West Coast',
    games: 126,
  },
  {
    surname: 'Fyfe',
    club: 'Fremantle',
    games: 173,
  },
  {
    surname: 'Walters',
    club: 'Fremantle',
    games: 151,
  },
  {
    surname: 'Mundy',
    club: 'Fremantle',
    games: 299,
  },
  {
    surname: 'Hogan',
    club: 'Fremantle',
    games: 83,
  },
  {
    surname: 'Mosquito',
    club: 'Essendon',
    games: 0,
  },
  {
    surname: 'Hooker',
    club: 'Essendon',
    games: 153,
  },
  {
    surname: 'Franklin',
    club: 'Sydney',
    games: 300,
  },
  {
    surname: 'Cripps',
    club: 'Carlton',
    games: 101,
  },
  {
    surname: 'Coniglio',
    club: 'Greater Western Sydney',
    games: 131,
  },
  {
    surname: 'Hill',
    club: 'St Kilda',
    games: 149,
  },
  {
    surname: 'Duncan',
    club: 'Geelong',
    games: 203,
  },
  {
    surname: 'OMeara',
    club: 'Hawthorn',
    games: 92,
  },


];

const container = document.createElement('div');
elementAttributeAppend(container, 'id', 'container', document.body);

const headline = document.createElement('h1');
elementInner(headline, 'Choose your WA State of Origin team', container);

const team = document.createElement('div');
elementAttributeAppend(team, 'id', 'team', container);

const teamDivOne = document.createElement('div');
elementAttributeAppend(teamDivOne, 'id', 'teamDivOne', team);

const back = document.createElement('h3');
elementInner(back, 'BACK', teamDivOne);

const mainTeam = document.createElement('div');
elementAttributeAppend(mainTeam, 'id', 'main-team', teamDivOne);

const forward = document.createElement('h3');
elementInner(forward, 'FORWARD', teamDivOne);

const teamDivtwo = document.createElement('div');
elementAttributeAppend(teamDivtwo, 'id', 'teamDivTwo', team);

const followersHead = document.createElement('h3');
elementInner(followersHead, 'Followers', teamDivtwo);

const followers = document.createElement('div');
elementAttributeAppend(followers, 'id', 'followers', teamDivtwo);

const interchangeHead = document.createElement('h3');
elementInner(interchangeHead, 'Interchange', teamDivtwo);

const interchange = document.createElement('div');
elementAttributeAppend(interchange, 'id', 'interchange', teamDivtwo);

const squad = document.createElement('div');
elementAttributeAppend(squad, 'id', 'squad', container);

const playersHead = document.createElement('h2');
elementInner(playersHead, 'Players', squad);

const playerContainer = document.createElement('div');
elementAttributeAppend(playerContainer, 'id', 'playerContainer', squad);
elementAttributeAppend(playerContainer, 'class', 'container', squad);

players.forEach((player) => {
  const playerDiv = document.createElement('div');
  playerContainer.appendChild(playerDiv);
  playerDiv.setAttribute('class', 'player');
  const pic = document.createElement('img');
  pic.setAttribute('class', 'headshot');
  pic.src = playerHeadshot;
  playerDiv.appendChild(pic);
  const name = document.createElement('p');
  name.innerHTML = player.surname;
  playerDiv.appendChild(name);
});

createDropZones(15, mainTeam);

createDropZones(3, followers);

createDropZones(3, interchange);

dragDrop();
