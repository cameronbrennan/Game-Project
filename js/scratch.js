/*
NOTE: The below represents an early build of this project with a LOT more
complexity than I had anticipated. Much of this code has not been run, but
there are parts of it that HAVE been tested and work well! I am keeping this
unlinked as a reference for future development changes and implimentation.

One of the biggest elements from this project that I would like to bring back
is the GameDirector object and it's methods to better manage the game across
various states. Alllll of that being said, there is definitely some copypasta
in here, and some clearly untested code. I've removed most of the comments
EXCEPT for the ones that point me to good game build concepts (which are uncommented code)

Thanks for checking out this scratch page!
_CB
*/


/*------ constants ------*/

class Character {
    constructor (classType, hp, strength, dexterity, magic) {
        this.classType = classType,
        this.hp = hp,
        this.strength = strength,
        this.dexterity = dexterity,
        this.magic = magic
    }
};



/*------ app's state variables ------*/

let player;
let enemy;

/*------ cached element references ------*/

// player and enemy healthbar display elements
let playerStatus;
let enemyStatus;

// player and enemy actions


// character attack function (with damage defined by stats)
player.attack = function (){
    let rawDamage;
    if (player.magic > 0){
        rawDamage = (player.strength * player.magic) / 1200;
    } else {
        rawDamage = (player.strength * player.dexterity) / 1200;
    }
    // add damage variance to produce different attack results
    let damageVariance = Math.floor(Math.random() * 10);
    // and have that as a calculation in the trueDamage output
    let trueDamage = rawDamage + damageVariance;
    // hit this many times (as a function of dexterity)
    let hitCount = Math.floor(Math.random() * Math.floor(player.dexterity / 10) / 3 ) + 1;
    let attackValues = [trueDamage, hitCount];
    return attackValues;
}


// animation for attack and take damage
// css shake style?

/*------ event listeners ------*/

// document.getElementById("btn-warrior").addEventListener("click", initBattle);
// document.getElementById("btn-rogue").addEventListener("click", initBattle);
// document.getElementById("btn-mage").addEventListener("click", initBattle);


/*------ functions ------*/
// !!!gameDirector object/methods is really cool and will be re-incorporated on future builds!!!
let gameDirector = {
    // init function that would make it easier to call on the resetPlayer and setBattlePrep
    // got the idea to do this from a youtube JS channel and I saw gameManager/gameDirector
    // objects in the JS files that I was able to access for other JS games. I think, knowing
    // what I know now after completing MVP, this is TOTALLY doable.
    setBattleStart: function (classType){
        this.resetPlayer(classType);
        this.setBattlePrep();
    },
    // This.... needs work, but the thinking here was you would click on a button specific
    // to your chosen character class (Warrior, Rogue, Mage), and it would populate the
    // constructor with the relevent class stats. I think there's something functional in
    // here, but it's badly implimented as written and will need work before future use.
    resetPlayer: function (classType){
        //if warrior, else rogue, else mage
        if (classType = "Warrior"){
            player = new Character (classType, 200, 150, 75, 0);
        } else if (classType = "Rogue"){
            player = new Character (classType, 150, 125, 200, 0);
        } else if (classType = "Mage"){
            player = new Character (classType, 100, 80, 100, 200)
        }
    //     // Blank Interaction screen... (unfinished)
    //     let userActions = document.querySelector(".userActions");
    //     userActions.innerHTML = '';
    //     let getPlayerEl = document.querySelector(".player");
    //     getPlayerEl.innerHTML = '';
    // },
//     setBattlePrep: function () {
//         let getTasks = document.querySelector(".tasks");
//         let getActions = document.querySelector(".userActions");
//         let getArena = document.querySelector(".battle-screen");
//         getTasks.innerText = "Task: Find your Foe!";
//         getActions.innerHTML = '<a href="#" class = "btn-battle">Generate Enemy!</a>';
//         getArena = "";// <- set background image for arena area to Vortex from blank
//     },
//     setBattle: function(){
//         let getTasks = document.querySelector(".tasks");
//         let getActions = document.querySelector(".userActions");
//         let getArena = document.querySelector(".battle-screen");
//         let getEnemy = document.querySelector(".enemy");

        // !!!Create enemies!!!
        // NOTE: Okay this was really cool and fun to build. I will need to re-work
        // the stats for each of the characters a bit, but I found the switch method
        // because it felt sloppy to implement if/else statements for this many potential
        // characters. I was really excited to impliment it here, and I'd like to incorporate
        // this code block in future developments of the main project.
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
//         getTasks.textContent = "Task: Choose your action!";
//         getActions.innerHTML = '<a href="#" class = "btn-battle">Attack!</a>'
//         getEnemyEl.innerHTML = '';
    }
}
