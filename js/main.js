/*------ constants ------*/

class Character {
    constructor (name, health, strength, dexterity, magic) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.dexterity = dexterity;
        this.magic = magic;
        this.attack = function (target) {
            target.health -= Math.floor(Math.random(5) * 25);
        }
    }
}

// Would like to implement attack damage as a function of character stats - rough code:

    // let rawDamage;
    // if (character.magic > 0){
    //     rawDamage = character.strength * character.magic / 1000;
    // } else {
    //     rawDamage = character.strength * character.dexterity / 1000;
    // }
    // let damageVariance = Math.floor(Math.random() * 10);
    // let trueDamage = rawDamage + damageVariance;
    // // hit this many times (as a function of dexterity)
    // let hitCount = Math.floor(Math.random() * Math.floor(character.dexterity / 10) / 3 ) + 1;
    // let attackValues = [trueDamage, hitCount];
    // return attackValues;
    // target.health -= attackValues.value


/*------ app's state variables ------*/

let player;
let enemy;
let victor;
const characterTemplate = `<img class = "avatar" src="" alt="">
    <h2></h2>
    <p>Health: <span class = "health"></span></p>`;


// player and enemy hitpoints remaining and status screen updates (as health bars if I can style it, else forget it!)


// win/loss state - should just be one state with variable display parameters

/*------ cached element references ------*/
// player and enemy display elements
const statusEls = {
    playerHealth: null,
    enemyHealth: null
}

const charactersEl = document.querySelector(".characters");

const gameWinnerEl = document.querySelector(".game-winner");




// animation for attack and take damage
// css shake style?

/*------ event listeners ------*/

// document.getElementById("btn-warrior").addEventListener("click", init);
// document.getElementById("btn-rogue").addEventListener("click", init);
// document.getElementById("btn-mage").addEventListener("click", init);
document.querySelector("#attack").addEventListener("click", battle);


/*------ functions ------*/

init();
function init (){
    console.log("init has run");
    player = new Character ("Warrior", 200, 150, 75, 0);
    enemy = new Character ("Pride", 200, 125, 60, 60);
    const playerEl = makeCharacterEl(player, "player");
    const enemyEl = makeCharacterEl(enemy, "enemy");
    charactersEl.appendChild(playerEl);
    charactersEl.appendChild(enemyEl);
    statusEls.playerHealth = playerEl.querySelector(".health");
    statusEls.enemyHealth = enemyEl.querySelector(".health");
    render();
}

function makeCharacterEl (character, elClass){
    let characterDiv = document.createElement("div")
    characterDiv.className = elClass;
    characterDiv.innerHTML = characterTemplate;
    characterDiv.querySelector("h2").textContent = character.name;
    characterDiv.querySelector(".health").textContent = character.health;
    characterDiv.querySelector("img").src = `assets/character-avatars/${character.name.toLowerCase()}.png`;
    return characterDiv;
}


function render (){
    console.log ("render is firing after init finished");
    // should update player and enemy health value after each battle()
    statusEls.playerHealth.textContent = player.health;
    statusEls.enemyHealth.textContent = enemy.health;
    if (victor){
        gameWinnerEl.textContent = victor.name;
        let winState = document.querySelector(".win-state")
        winState.classList.remove("hidden");
    }
}

function battle(){
    if (player.health > 0 && enemy.health > 0){
        player.attack(enemy);
        console.log ("Warrior attacks " + enemy.name + "! Enemy Health: " + enemy.health);
        
    } if (player.health > 0 && enemy.health > 0){
        enemy.attack(player);
        console.log ("Pride attacks " + player.name + "! Player Health: " + player.health);   
    }
    victor = getWinner(player, enemy);
    render();
}

function getWinner(playerChar, enemyChar){
    // if enemy health is <= 0 return playerChar
    if (enemyChar.health <= 0){
        return playerChar;
    }
    // if player health is <= 0 retutn enemyChar
    if (playerChar.health <= 0){
        return enemyChar;
    }
    // else return null
    return null;
}