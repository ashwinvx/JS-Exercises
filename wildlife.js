/* Task 1: Track Animal Sightings */

function animalSightings(...names) {
	console.log(names);
}

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];

const habitats = [...forestHabitats, ...savannahHabitats];

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};

const rhinoStatusCopy = { ...rhinoStatus, population: 1000, habitat: 'Forest A' };

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};

const lionGeneticProfile = { ...lionProfile, genetic: 'Diverse' };
/*
 * Observations:
 * Shallow copy doesn't affect the original's top level properties. Nested properties will be effected though.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};

const ecosystemHealthShallowCopy = { ...ecosystemHealth };
ecosystemHealthShallowCopy.waterQuality = "Bad";
ecosystemHealthShallowCopy.foodSupply.carnivores = "Abundant";
/*
 * Observations:
 * With shallow copy top level properties are not effected in the original but nested properties will as shallow copy references nested objects are referenced in the memory.
 */
