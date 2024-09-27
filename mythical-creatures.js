const mythicalCreatures = [
	{ name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
	{ name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
	{ name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
	{ name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
	{ name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" }
];


const waterCreature = mythicalCreatures.find(creature => creature.type === 'Water');
console.log('waterCreature-->', waterCreature.name);

const griffinPosition = mythicalCreatures.findIndex(creature => creature.name === 'Griffin');
console.log('griffinPosition-->', griffinPosition);

const creatureInEnchantedForest = mythicalCreatures.find(creature => creature.lastSeen === 'Enchanted Forest');
console.log('creatureInEnchantedForest-->', creatureInEnchantedForest.name);