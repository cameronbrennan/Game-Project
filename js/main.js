/*------ constants ------*/
const playerTypes = ["Warrior", "Rogue", "Mage"];
const enemyTypes = ["Pride", "Greed", "Lust", "Envy", "Gluttony", "Wrath", "Sloth"];

function Player (classType, hp, strength, dexterity, magic) {
    this.classType = classType,
    this.hp = hp,
    this.strength = strength,
    this.dexterity = dexterity,
    this.magic = magic
};

// warrior stats ("warrior", 200, 150, 75, 0)
// rogue stats ("rogue", 150, 125, 200, 0)
// mage stats ("mage", 100, 80, 100, 200)

function Enemy (enemyType, hp, strength, dexterity, magic){
    this.enemyType = enemyType,
    this.hp = hp,
    this.strength = strength,
    this.dexterity = dexterity,
    this.magic = magic
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
let playerStatus = document.querySelector("#p-status");
let enemyStatus = document.querySelector("#e-status");

// player and enemy actions taken each turn


let playerActions = function(){
    let playerAttack = function (){

    }

}

let enemyActions = function(){
    let enemyAttack = function (){

    }
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

document.querySelector("#Warrior").addEventListener("click", gameDirector.setBattleStart("Warrior"));
document.querySelector("#Rogue").addEventListener("click", gameDirector.setBattleStart("Rogue"));
document.querySelector("#Mage").addEventListener("click", gameDirector.setBattleStart("Mage"));


/*------ functions ------*/

let gameDirector = {
    setBattleStart: function (classType){
        this.resetPlayer(classType);
        this.setBattlePrep();
    },
    resetPlayer: function (classType){
        //if warrior, else rogue, else mage
        if (classType === "Warrior"){
            player = new Player (classType, 200, 150, 75, 0);
        } else if (classType === "Rogue"){
            player = new Player (classType, 150, 125, 200, 0);
        } else if (classType === "Mage"){
            player = new Player (classType, 100, 80, 100, 200)
        }
        // Blank Interaction screen...
        let getInteraction = document.querySelector(".interaction-area")
        let getPlayerChar = document.querySelector("#p-char");
        getPlayerChar.innerHTML = '<img src="assets/character-avatars/' + classType.toLowerCase() + '.png" class="avatar"><div><h2>' + classType + '</h2><p>Health: ' + player.health + '</p><p>Strength: ' + player.strength + '</p><p>Dexterity: ' + player.dexterity + '</p><p>Magic: ' + player.magic + '</p></div>';
    },
    setBattlePrep: function () {
        let getTasks = document.querySelector(".tasks");
        let getActions = document.querySelector(".interaction-area");
        let getArena = document.querySelector(".battle-screen");
        getTasks.innerText = "Find your Foe!";
        getActions.innerHTML = '<a href="#" class = "btn-findEnemy">Generate Enemy!</a>';
        getArena = "";// <- set background image for arena area to Vortex from blank
    },
    setBattle: function(){
        let getTasks = document.querySelector(".tasks");
        let getActions = document.querySelector(".interaction-area");
        let getArena = document.querySelector(".battle-screen");
        // Create enemies
        let enemy00 = new Enemy("pride", 200, 125, 60, 60);
        let enemy01 = new Enemy("greed", 125, 125, 80, 70);
        let enemy02 = new Enemy("lust", 100, 150, 60, 100);
        let enemy03 = new Enemy("envy", 100, 200, 80, 80);
        let enemy04 = new Enemy("gluttony", 150, 100, 50, 50);
        let enemy05 = new Enemy("wrath", 150, 50, 100, 60);
        let enemy06 = new Enemy("sloth", 200, 150, 80, 20);
        let generateEnemy = Math.floor(Math.random() * 7);
        console.log(generateEnemy)
    }
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