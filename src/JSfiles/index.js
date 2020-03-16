import domtoimage from 'dom-to-image';
// eslint-disable-next-line no-unused-vars
import { saveAs } from 'file-saver';
import playerHeadshot from '../assets/images/placeholder2.png';
import '../style.scss';
import { dragDrop, createDropZones } from './dragDropFuncs';
import { elementAttributeAppend, elementInner } from './createElementFuncs';


const players = [

  {
    name: 'Nic Naitanui',
    club: 'West Coast',
  },
  {
    name: 'Josh Kennedy',
    club: 'West Coast',
  },
  {
    name: 'Liam Ryan',
    club: 'West Coast',
  },
  {
    name: 'Tim Kelly',
    club: 'West Coast',
  },
  {
    name: 'Elliot Yeo',
    club: 'West Coast',
  },
  {
    name: 'Jeremy McGovern',
    club: 'West Coast',
  },
  {
    name: 'Dom Sheed',
    club: 'West Coast',
  },
  {
    name: 'Brad Sheppard',
    club: 'West Coast',
  },
  {
    name: 'Nat Fyfe',
    club: 'Fremantle',
  },
  {
    name: 'Michael Walters',
    club: 'Fremantle',
  },
  {
    name: 'David Mundy',
    club: 'Fremantle',
  },
  {
    name: 'Jesse Hogan',
    club: 'Fremantle',
  },
  {
    name: 'Rory Lobb',
    club: 'Fremantle',
  },
  {
    name: 'Brandon Matera',
    club: 'Fremantle',
  },
  {
    name: 'Joel Hamling',
    club: 'Fremantle',
  },
  {
    name: 'Nathan Wilson',
    club: 'Fremantle',
  },
  {
    name: 'Irving Mosquito',
    club: 'Essendon',
  },
  {
    name: 'Cale Hooker',
    club: 'Essendon',
  },
  {
    name: 'Aaron Naughton',
    club: 'Western Bulldogs',
  },
  {
    name: 'Jason Johannisen',
    club: 'Western Bulldogs',
  },
  {
    name: 'Lance Franklin',
    club: 'Sydney',
  },
  {
    name: 'Patrick Cripps',
    club: 'Carlton',
  },
  {
    name: 'Stephen Coniglio',
    club: 'Greater Western Sydney',
  },
  {
    name: 'Sam Taylor',
    club: 'Greater Western Sydney',
  },
  {
    name: 'Brad Hill',
    club: 'St Kilda',
  },
  {
    name: 'Paddy Ryder',
    club: 'St Kilda',
  },
  {
    name: 'Mitch Duncan',
    club: 'Geelong',
  },
  {
    name: 'Jaeger O&#39Meara',
    club: 'Hawthorn',
  },
  {
    name: 'Ben Stratton',
    club: 'Hawthorn',
  },
  {
    name: 'Daniel Rich',
    club: 'Brisbane',
  },


];

const container = document.createElement('div');
elementAttributeAppend(container, 'id', 'container', document.body);

const headline = document.createElement('h1');
elementInner(headline, 'id', 'headline', 'Choose your WA State of Origin team', container);

const blurb = document.createElement('p');
elementInner(blurb, 'id', 'blurb', 'Drag and drop players to positions on the field and once your&#39e done <span id=click> click here </span> to download a snapshot of your team to share on social media.', container);

const click = document.getElementById('click');
click.addEventListener('click', () => {
  click.style.color = 'purple';
  const node = document.getElementById('team');
  node.style.backgroundColor = 'white';
  domtoimage.toBlob(node)
    .then((blob) => {
      window.saveAs(blob, 'WA-State-of-Origin-team.png');
    });
});

const team = document.createElement('div');
elementAttributeAppend(team, 'id', 'team', container);

const teamDivOne = document.createElement('div');
elementAttributeAppend(teamDivOne, 'id', 'teamDivOne', team);

const back = document.createElement('h4');
elementInner(back, 'id', 'back', 'BACK', teamDivOne);

const mainTeam = document.createElement('div');
elementAttributeAppend(mainTeam, 'id', 'main-team', teamDivOne);

const forward = document.createElement('h4');
elementInner(forward, 'id', 'forward', 'FORWARD', teamDivOne);

const teamDivtwo = document.createElement('div');
elementAttributeAppend(teamDivtwo, 'id', 'teamDivTwo', team);

const followersHead = document.createElement('h3');
elementInner(followersHead, 'id', 'followersHead', 'FOLLOWERS', teamDivtwo);

const followers = document.createElement('div');
elementAttributeAppend(followers, 'id', 'followers', teamDivtwo);

const interchangeHead = document.createElement('h3');
elementInner(interchangeHead, 'id', 'interchangeHead', 'INTERCHANGE', teamDivtwo);

const interchange = document.createElement('div');
elementAttributeAppend(interchange, 'id', 'interchange', teamDivtwo);

const squad = document.createElement('div');
elementAttributeAppend(squad, 'id', 'squad', container);

const playersHead = document.createElement('h2');
elementInner(playersHead, 'id', 'players', 'Players', squad);

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
  name.innerHTML = player.name;
  playerDiv.appendChild(name);
  playerDiv.fullName = player.name;
});

createDropZones(15, mainTeam);

createDropZones(3, followers);

createDropZones(3, interchange);

dragDrop();
