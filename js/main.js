/*------ constants ------*/
let player;
function Player (classType, hp, strength, dexterity, magic) {
    this.classType = classType,
    this.hp = hp,
    this.strength = strength,
    this.dexterity = dexterity,
    this.magic = magic
};

let enemy;
function Enemy (enemyType, hp, strength, dexterity, magic){
    this.enemyType = enemyType,
    this.hp = hp,
    this.strength = strength,
    this.dexterity = dexterity,
    this.magic = magic
};


/*------ app's state variables ------*/
// player and enemy hitpoints remaining and status screen updates
let playerStatus = document.querySelector("#p-status");
let enemyStatus = document.querySelector("#e-status");

// player and enemy actions taken each turn




// win/loss state - should just be one state with variable display parameters


/*------ cached element references ------*/
// player and enemy objects
// player and enemy objects are defined as global let variables ahead of their constructors
/*let player;
let enemy;*/

// player and enemy status display elements
let playerStatus;
let enemyStatus;

// player and enemy actions

// let BattleAction = {
//     firstAttack: function () {
//         // who attacks first as a function of dexterity
//         let getPlayerDex = player.dexterity;
//         let getEnemyDex = enemy.dexterity;
//     }
//     // player attack function
//     let playerAttack = function (){
//         let rawDamage;
//         if (player.magic > 0){
//             rawDamage = player.strength * player.magic / 1000;
//         } else {
//             rawDamage = player.strength * player.dexterity / 1000;
//         }
//         let damageVariance = Math.floor(Math.random() * 10);
//         let trueDamage = rawDamage + damageVariance;
//         // hit this many times (also as a function of dexterity)
//         let hitCount = Math.floor(Math.random() * Math.floor(player.dexterity / 10) / 3 ) + 1;
//         let attackValues = [trueDamage, hitCount];
//         return attackValues;
//     }
//     // enemy attack function
//     let enemyAttack = function () {
//         let rawDamage;
//         if (enemy.magic > 0){
//             rawDamage = enemy.strength * enemy.magic / 1000;
//         } else {
//             rawDamage = enemy.strength * enemy.dexterity / 1000;
//         }
//         let damageVariance = Math.floor(Math.random(0) * 10);
//         let trueDamage = rawDamage + damageVariance;
//         // hit this many times (also as a function of dexterity)
//         let hitCount = Math.floor(Math.random() * Math.floor(enemy.dexterity / 10) / 4 ) + 1;
//         let attackValues = [trueDamage, hitCount];
//         return attackValues;
//     }
//     let 
// }

// animation for attack and take damage
// ???

/*------ event listeners ------*/

document.getElementById("btn-warrior").addEventListener("click", gameDirector.setBattleStart('Warrior'));
document.getElementById("btn-rogue").addEventListener("click", gameDirector.setBattleStart('Rogue'));
document.getElementById("btn-mage").addEventListener("click", gameDirector.setBattleStart('Mage'));


/*------ functions ------*/

let gameDirector = {
    // init functions
    setBattleStart: function (classType){
        this.resetPlayer(classType);
        this.setBattlePrep();
    },
    resetPlayer: function (classType){
        //if warrior, else rogue, else mage - init with chosen character
        // Constuctor Properties (classType, hp, strength, dexterity, magic)
        if (classType = "Warrior"){
            player = new Player (classType, 200, 150, 75, 0);
        } else if (classType = "Rogue"){
            player = new Player (classType, 150, 125, 200, 0);
        } else if (classType = "Mage"){
            player = new Player (classType, 100, 80, 100, 200)
        }
        // get elements to render new state
        let userActions = document.querySelector(".userActions");
        let getPlayerChar = document.querySelector(".player");
        // render new state
        userActions.innerHTML = '';
        getPlayerChar.innerHTML = '<img src="assets/character-avatars/' + classType.toLowerCase() + '.png" class="avatar"><div><h2>' + classType.toLowerCase() + '</h2><p>Health: ' + player.health + '</p><p>Strength: ' + player.strength + '</p><p>Dexterity: ' + player.dexterity + '</p><p>Magic: ' + player.magic + '</p></div>';
    },
    setBattlePrep: function () {
        // get elements to render new state
        let getTasks = document.querySelector(".tasks");
        let getActions = document.querySelector(".userActions");
        let getArena = document.querySelector(".battle-arena");
        // render new state
        getTasks.innerText = "Task: Find your Foe!";
        getActions.innerHTML = '<p><a href="#" class = "btn-battle">Generate Enemy!</a></p>';
        getArena = "";// <- set background image for arena area to Vortex from blank
    },
    setBattle: function(){
        // get elements to render new state
        let getTasks = document.querySelector(".tasks");
        let getActions = document.querySelector(".userActions");
        let getArena = document.querySelector(".battle-arena");
        let getEnemy = document.querySelector(".enemy");
        // Create enemies
        // Constuctor Properties (classType, hp, strength, dexterity, magic)
        let enemy00 = new Enemy("pride", 200, 125, 60, 60);
        let enemy01 = new Enemy("greed", 125, 125, 80, 70);
        let enemy02 = new Enemy("lust", 100, 150, 60, 100);
        let enemy03 = new Enemy("envy", 100, 200, 80, 80);
        let enemy04 = new Enemy("gluttony", 150, 100, 50, 50);
        let enemy05 = new Enemy("wrath", 150, 50, 100, 60);
        let enemy06 = new Enemy("sloth", 200, 150, 80, 20);
        let randomEnemy = Math.floor(Math.random() * 7);
        console.log(randomEnemy)
        switch (randomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
            case 3:
                enemy = enemy03;
                break;
            case 4:
                enemy = enemy04;
                break;
            case 5:
                enemy = enemy05;
                break;
            case 6:
                enemy = enemy06;
                break;
            case 7:
                enemy = enemy07;
                break;
        }
        // render new state with enemies and updated task
        getTasks.textContent = "Task: Choose your action!";
        getActions.innerHTML = '<a href="#" class = "btn-battle">Attack!</a>'
        getEnemy.innerHTML = '<img src="assets/enemy-avatars/' + classType.toLowerCase() + '.png" class="enemy-avatar"><div><h2>' + classType.toLowerCase() + '</h2><p>Health: ' + enemy.health + '</p><p>Strength: ' + enemy.strength + '</p><p>Dexterity: ' + enemy.dexterity + '</p><p>Magic: ' + enemy.magic + '</p></div>';
    },
    Battle: function () {

    }
}