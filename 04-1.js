function petFood(input) {
	let days = Number(input[0]);
	let totalFood = Number(input[1]);
	let currentDay = 0;
	let totalEatenFood = 0;
	let totalEatenDog = 0;
	let totalEatenCat = 0;
	let biscuitsEaten = 0;
 
	for (let index = 2; index < days * 2 + 2; index += 2) {
		currentDay++;
		if (currentDay % 3 === 0) {
			biscuitsEaten += (Number(input[index]) + Number(input[index + 1])) * 0.1;
		}
		totalEatenDog += Number(input[index]);
		totalEatenCat += Number(input[index + 1]);
	}
	totalEatenFood = totalEatenCat + totalEatenDog;
	console.log(`Total eaten biscuits: ${Math.round(biscuitsEaten)}gr.`);
	console.log(`${(totalEatenFood / totalFood * 100).toFixed(2)}% of the food has been eaten.`);
	console.log(`${(totalEatenDog / totalEatenFood * 100).toFixed(2)}% eaten from the dog.`);
	console.log(`${(totalEatenCat / totalEatenFood * 100).toFixed(2)}% eaten from the cat.`);
}

petFood(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"])