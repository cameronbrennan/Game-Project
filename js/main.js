/*------ constants ------*/
function Player(classType, hp, mana, attack, speed) {
    this.classType = classType,
    this.hp = hp,
    this.mana = mana
    this.attack = attack,
    this.speed = speed
};

// warrior stats ("warrior", 200, 60, 100, 40)
// rogue stats ("rogue", 150, 125, 60, 100)
// mage stats ("mage", 100, 200, 80, 80)

function Enemy(enemyType, hp, mana, attack, speed){
    this.enemyType = enemyType,
    this.hp = hp,
    this.mana = mana,
    this.attack = attack,
    this.speed=speed
};

// pride enemy type ("pride", 200, 125, 60, 60)
// greed enemy type ("greed", 125, 125, 80, 70)
// lust enemy type ("lust", 100, 150, 60, 100)
// envy enemy type ("envy", 100, 200, 80, 80)
// gluttony enemy type ("gluttony", 150, 100, 50, 50)
// wrath enemy type ("wrath", 150, 50, 100, 60)
// sloth enemy type ("sloth", 200, 0, 80, 20)


/*------ app's state variables ------*/
// player and enemy hitpoints remaining and status screen updates
let playerStatus = document.querySelector(".p-status");
let enemyStatus = document.querySelector(".e-status");

// player and enemy actions taken each turn
function playerAction () {
    this.attack1 = attack1, // <- costs mana only for mage classType
    this.attack2 = attack2, // <- costs mana for all classTypes
    this.defend = defend, // <- reduces incoming damage that turn by 50% - RUNS FIRST REGARDLESS OF SPEED
    this.heal = heal
}

function enemyAction () {
    this.attack1 = attack1, // <- costs mana for all enemyTypes
    this.attack2 = attack2, // <- costs mana for all enemyTypes
    this.defend = defend // <- reduces incoming damage that turn by 50% - RUNS FIRST REGARDLESS OF SPEED
}

// win/loss state - should just be one state with variable display parameters


/*------ cached element references ------*/
// player and enemy objects
let player;
let enemy;

// player and enemy status display elements
let playerStatus;
let enemyStatus;

// player and enemy actions
let playerAction;
let enemyAction;

// animation for attack and take damage
// ???

/*------ event listeners ------*/
// player actions across ALL states
// next state and previous state
document.querySelector(".nav-buttons").addEventListener("click", nextState(), prevState())

// player actions in character select state
document.querySelector(".interaction-area").addEventListener("click", charSel())

// player actions in pre-battle state
document.querySelector(".interaction-area").addEventListener("click", battleStart())

// player actions (in battle state)
document.querySelector(".battle-buttons").addEventListener("click", playerAction())

// if able to implement npc dialogue
document.querySelector().addEventListener("click", npcInt())

//for win or loss state from battle
document.querySelector(".play-again").addEventListener("click", init())


/*------ functions ------*/
init();
function init(){

}

function render(){

}

function battle(){

}

function selChar(){

}

// for if I have time to implement a rudamentary dialogue system with NPCs
function npcInt(){

}