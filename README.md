## Hello! Thank you for checking out my project!

### This is my first attempt at making a game with JS, and was inspired by the turn-based rpgs of my childhood such as "Chrono Trigger" and the Final Fantasy series.

#### During this initial phase of development, I am going to be solely focused on implementing a very basic battle arena with light RPG elements. During this stage, there will be no implementation of player selected character stats or leveling up as you would traditionally see in a role playing game, but I hope to be able to add these features down the line. For now, the game flow is listed below:

###### <space><space>*<space> Upon init, the player will choose from three available class types (the Warrior, Rogue, and Mage) which will have predetermined stat spreads that define things like Max Hitpoints and action priority, also referred to as initiative.

###### <space><space>*<space> Once the character is selected, they will move to the "pre-battle" state. Intitial build will only show a comparison of the players stats and the enemies stats (these stats will be: "Hitpoints", "Strength", "Dexterity", and "Guile"), but I am also planning on implementing a some NPCs represented as a simple, text-based, and optional dialogue system _hopefully_ as a part of the initial phase of development.

###### <space><space>*<space> Once the battle phase commences, the player character and enemy character will take turns selecting one of two attack functions and a defense function. Unique to the player character is a **heal** function, which will take one turn to recover 20% of the player character's total hitpoints. Use the healing potions wisely though - you can only take three into each battle.
###### The initiative of the player character and enemy character is calculated, and each round starts with with the action of the character with the higher initiative. Fear not, however, as the defend action will override initiative and enter the character into a **defend** state before the first character action and reduce all incoming damage by 50%
###### The battle will play out in these turns until one character's HP reaches zero, at which point there will be a "Victory!" or "Defeat..." end state as well as the options to re-initialize and play again. (Note: I will eventually be adding a win count and character select bypass if your chosen character wins the battle, but I am not sure if this will make it into the initial build version)



#### <space><space>*<space> Long Term Project Goals (in order of priority):
###### <space><space>*<space> Add damage values above character sprites on the Battle Screen
###### <space><space>*<space> Add in the aforementioned NPC dialogue system, and a "Guile" stat check for certain NPC interactions
###### <space><space>*<space> Implement damage types and weaknesses (most likely with only 3 types, but potentially up to 5 which would include strength/weakness overlap)
###### <space><space>*<space> 2d Grid positioning system. This would be implemented in two places:
###### <space><space><space><space>*<space> The addition of a 'town' setting, where NPC interactions would be initiated by relative grid positioning
###### <space><space><space><space>*<space> The addition of attack ranges per character, which will buff/debuff attacks when not at optimal range. I foresee enemy AI programming becoming a lot more of a challenge here.


#### Thank you for reading through this far, and I'm looking forward to working on and sharing the development process as it comes along!

## _CB