const users = [
	{ firstName: "Alice", lastName: "Johnson", points: 120 },
	{ firstName: "Bob", lastName: "Smith", points: 99 },
	{ firstName: "Charlie", lastName: "Brown", points: 180 }
];

const updatedUsers = users.map(item => {
	return { fullName: `${item.firstName} ${item.lastName}`, membershipStatus: item.points > 100 ? 'Premium' : 'Standard' }
})

console.log(updatedUsers);