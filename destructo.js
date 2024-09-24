/* Task 1: Unveiling the Coordinates */
const coordinates = { x: 34, y: 42, z: 67 };

const { x, y } = coordinates;
console.log(`x--> ${x} and y-->${y}`);

/* Task 2: The Map of Secrets */
const locations = {
	first: "Cave of Wonders",
	second: "Lake of Mystery",
	third: "Mount of Ages",
	fourth: "Desert of Shadows"
};

const { first, second, ...remaining } = locations;
console.log(`first--> ${first} and second-->${second}`);
console.log('remaining-->', JSON.stringify(remaining));

/* Task 3: The Mysterious Door */
const doorCode = {
	upper: "Alpha",
	lower: "Omega"
};

const { upper, middle = remaining.fourth, lower } = doorCode;
console.log(`upper--> ${upper} and middle-->${middle} and lower-->${lower}`);

/* Task 4: The Guardian's Riddle */
const riddle = {
	ancientWord: "Sphinx",
	modernWord: "Cat"
};

const { ancientWord: translation } = riddle;
console.log(`translation--> ${translation}`);

/* Task 5: The Array of Elements */
const elements = ["Fire", "Water", "Earth", "Air"];

const [firstClue, secondClue] = elements;
console.log(`firstClue--> ${firstClue} and secondClue--> ${secondClue}`);

/* Task 6: Skipping Stones */
const stones = [1, 2, 3, 4, 5, 6];

const [firstStone, , , , , sixthStone] = stones;
console.log(`firstStone--> ${firstStone} and sixthStone--> ${sixthStone}`);

/* Task 7: The Array of Shadows */
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];

const [visibleShadow, ...hiddenShadows] = shadows;
console.log(`visibleShadow--> ${visibleShadow} and hiddenShadows--> ${hiddenShadows}`);

/* Task 8: The Wise Function */

function revealPath({ direction, distance }) {
	console.log(`Move towards direction ${direction} for distance ${distance}`);
}
revealPath({ direction: 'South', distance: '500m' });

/* Task 9: The Scroll of Defaults */

function mixPotion({ ingredient1 = "Water", ingredient2 = "FireFlower" }) {
	console.log(`ingredient1--> ${ingredient1} and ingredient2--> ${ingredient2}`);
}
mixPotion({ ingredient2: "Fire" });

/* Task 10: The Array Spell */

function castSpell([first, second, ...rest]) {
	console.log(`first--> ${first} and second--> ${second}`);
}
castSpell(elements);

/* Task 11: The Nested Secret */
const nestedSecret = { outer: { inner: "The Final Key" } };

const { outer: { inner: finalKey } } = nestedSecret;
console.log(`finalKey--> ${finalKey}`);

/* Task 12: The Swap of Fate */
let stoneA = "Emerald";
let stoneB = "Ruby";

[stoneA, stoneB] = [stoneB, stoneA];
console.log(`stoneA--> ${stoneA} and stoneB--> ${stoneB}`);