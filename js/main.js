/*------ constants ------*/
function Player(classType, hp, attack, speed) {
    this.classType = classType,
    this.hp = hp,
    this.attack = attack,
    this.speed = speed
};

function Enemy(enemyType, hp, attack, speed){
    this.enemyType = enemyType,
    this.hp = hp,
    this.attack = attack,
    this.speed=speed
};


/*------ app's state variables ------*/
// player and enemy hitpoints remaining and status screen updates
let playerStatus = document.getElementsByClassName("p-status");
let enemyStatus = document.getElementsByClassName("e-status");

// player and enemy actions taken each turn


// win/loss state - should just be one state with variable display parameters


/*------ cached element references ------*/
// player and enemy status display elements


// animation for attack and take damage


/*------ event listeners ------*/
// player actions across ALL states
// next state
// previous state (if implimented, note: probably not included in battle state))
document.querySelector("nav-buttons").addEventListener("click", nextState(), prevState())

// player actions in character select state
document.querySelector().addEventListener("click", charSel())

// player actions in pre-battle state
document.querySelector().addEventListener("click", battleStart())
// if able to implement npc dialogue
document.querySelector().addEventListener("click", npcInt())

// player actions (in battle state)
document.querySelector().addEventListener("click", "Character Actions")
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

function charAction(){

}

function enemyAction(){

}

// for if I have time to implement a rudamentary dialogue system with NPCs
function npcInt(){

}