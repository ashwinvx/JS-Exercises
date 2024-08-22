function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

let vacation = 0; 
for(let i = 0; i < 20; i++){
    try{
        mysteryOperation();
        vacation += 13;//13 vacation days if successful
    } catch (error) {
        console.error(error.message);
        vacation += 1;//1 vacation day if unsuccessful
    }
    finally {
        vacation += 3;//3 Vacation days for attending
    }
}

console.log('vacation: ' + vacation);