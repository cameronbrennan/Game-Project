/*------ constants ------*/
function Player (classType, hp) {
    this.classType = classType,
    this.hp = hp,
    this.attack = function (enemy){
        enemy.hp -= (Math.random(10) * 20)
    }
};

// warrior stats ("warrior", 200, 60, 100, 40)
// rogue stats ("rogue", 150, 125, 60, 100)
// mage stats ("mage", 100, 200, 80, 80)

function Enemy (enemyType, hp){
    this.enemyType = enemyType,
    this.hp = hp,
    this.attack = function (player){
        player.hp -= (Math.random(5) * 15)
    }
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
/*function playerAction () {
    this.attack1 = attack1, // <- costs mana only for mage classType
    this.attack2 = attack2, // <- costs mana for all classTypes
    this.defend = defend, // <- reduces incoming damage that turn by 50% - RUNS FIRST REGARDLESS OF SPEED
    this.heal = heal
}*/

// Warrior Attack Functions
// Attack 1: Strike! (No mana cost, avg 15 dmg, 75% hit chance)
// Attack 2: Cleave (costs 10 mana, avg 30 dmg, 50% hit chance)

// Rogue Attack Functions
// Attack 1: Combo Strike! (No mana cost, avg 5 dmg, 100% hit chance, 80% chance to hit again, 60% chance to hit more than twice, 20% chance to hit more than 3 times, max 4 hits)
// Attack 2: Sneak attack (25 mana cost, avg 30 dmg, 90% hit chance if rogue health is full, else 40% hit chance)

// Mage Attack Functions
// Attack 1: Fireball (10 mana cost, avg 20 dmg, 80% hit chance)
// Attack 2: Lightning Storm (50 mana cost, avg 30 dmg, 50% chance to stun and have enemy miss 1 turn in defend)

/*function enemyAction () {
    this.attack1 = attack1, // <- costs mana for all enemyTypes
    this.attack2 = attack2, // <- costs mana for all enemyTypes
    this.defend = defend // <- reduces incoming damage that turn by 50% - RUNS FIRST REGARDLESS OF SPEED
}*/

// win/loss state - should just be one state with variable display parameters


/*------ cached element references ------*/
// player and enemy objects
let player = new Player ("Warrior", 150);
let enemy = new Enemy ("Pride", 100);

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
document.querySelector(".interaction-area").addEventListener("click", )

// player actions in pre-battle state
document.querySelector(".interaction-area").addEventListener("click", battleStart())

// player actions (in battle state)
document.querySelector(".battle-buttons").addEventListener("click", )

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

function battleRound(){
    if (player.hp > 0 && enemy.hp > 0){
        player.attack(enemy);
        console.log("Player attacks " + enemy.classType + " for " + player.attack + " damage!");
    } if (player.hp > 0 && enemy.hp > 0){
        enemy.attack(player);
        console.log("Enemy attacks " + player.classType + " for " + enemy.attack + " damage!");
    }
};

function checkWinner(){
    if (enemy.hp <= 0){
    console.log(player.classType + " has defeated " + enemy.classType)
    } if (player.hp <= 0){
    console.log(enemy.classType + " has defeated " + player.classType)
    }
}

while (player.hp > 0 && enemy.hp > 0){
    battleRound();
    checkWinner();
}

function selChar(){

}

// for if I have time to implement a rudamentary dialogue system with NPCs
function npcInt(){

}