/*------ constants ------*/
// character constructor as a class to allow future development of multiple
// character types, and allow their actions to be a function of their stats
class Character {
  constructor(name, health, strength, dexterity, magic) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.dexterity = dexterity;
    this.magic = magic;
    this.attack = function (target) {
      target.health -= Math.floor(Math.random(5) * 25);
    };
  }
}

/*------ app's state variables ------*/
// player & enemy variables for constructor
let player;
let enemy;
// victor variable for getWinner function to populate
let victor;
// character create template for easy implimentation of future character additions
const characterTemplate = `<img class = "avatar" src="" alt="">
    <h2></h2>
    <p>Health: <span class = "health"></span></p>`;
// ^^^player and enemy hitpoints remaining^^^ and status screen updates
// will add health bar styling in next round of development updates

/*------ cached element references ------*/
// player and enemy health display elements
const statusEls = {
  playerHealth: null,
  enemyHealth: null,
};
// create element for the battle area
const battleArenaEl = document.querySelector(".battle-arena");
// create element for the character div
const charactersEl = document.querySelector(".characters");
// win/loss state (hidden until getWinner finds victor)
const gameWinnerEl = document.querySelector(".game-winner");
// creates attack button element for functions
// (will eventually be replaced with ul  when I add more character actions)
const actionButtonEls = document.querySelector("#attack");
// creates (currently non-functional) play again button
const playAgainButton = document.querySelector("#play-again");

/*------ event listeners ------*/
// single "attack" button in current build - future build will include:
// attack1, attack2, defend, and heal player actions
document.querySelector("#attack").addEventListener("click", battle);

/*------ functions ------*/
// init function currently set to specific character constructors
// future builds will resetPlayer and include a character select as well
// as a randomly generate enemy function
init();
function init() {
  console.log("init has run");
  player = new Character("Warrior", 200, 150, 75, 0);
  enemy = new Character("Pride", 200, 125, 60, 60);
  const playerEl = makeCharacterEl(player, "player");
  const enemyEl = makeCharacterEl(enemy, "enemy");
  charactersEl.appendChild(playerEl);
  charactersEl.appendChild(enemyEl);
  statusEls.playerHealth = playerEl.querySelector(".health");
  statusEls.enemyHealth = enemyEl.querySelector(".health");
  render();
}
// util function to create the characters for 'enemy' and 'player' variables
// as well as attach the correct avatar image and set classname for callbacks
function makeCharacterEl(character, elClass) {
  let characterDiv = document.createElement("div");
  characterDiv.className = elClass;
  characterDiv.innerHTML = characterTemplate;
  characterDiv.querySelector("h2").textContent = character.name;
  characterDiv.querySelector(".health").textContent = character.health;
  characterDiv.querySelector(
    "img"
  ).src = `assets/character-avatars/${character.name.toLowerCase()}.png`;
  return characterDiv;
}
// render function - pushes updates to player and enemy health elements
function render() {
  console.log("render is firing after init finished");
  // update player and enemy health value after each battle()
  statusEls.playerHealth.textContent = player.health;
  statusEls.enemyHealth.textContent = enemy.health;
  // and includes the check to make sure that victor.name is truthy so that
  // it can run all the time, even when victor=null/undefined
  if (victor) {
    gameWinnerEl.textContent = victor.name;
    let winState = document.querySelector(".win-state");
    winState.classList.remove("hidden");
    playAgainButton.classList.remove("hidden");
    battleArenaEl.classList.add("hidden");
    actionButtonEls.classList.add("hidden");
  }
}
// battle function runs a single player and enemy attack, reports result as console log
// (will eventually have the results reported to a new element for battle status)
// completes by calling getWinner to check win conditions, and render() to update view
function battle() {
  if (player.health > 0 && enemy.health > 0) {
    player.attack(enemy);
    console.log(
      "Warrior attacks " + enemy.name + "! Enemy Health: " + enemy.health
    );
  }
  if (player.health > 0 && enemy.health > 0) {
    enemy.attack(player);
    console.log(
      "Pride attacks " + player.name + "! Player Health: " + player.health
    );
  }
  victor = getWinner(player, enemy);
  render();
}
//getWinner checks player and enemy health to define victor if character health <= 0
function getWinner(playerChar, enemyChar) {
  // if enemy health is <= 0 return playerChar
  if (enemyChar.health <= 0) {
    return playerChar;
  }
  // if player health is <= 0 retutn enemyChar
  if (playerChar.health <= 0) {
    return enemyChar;
  }
  // else return null
  return null;
}