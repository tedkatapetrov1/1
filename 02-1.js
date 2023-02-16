function catWalking(input) {
    let minWalk = Number(input[0]);
    let walksDay = Number(input[1]);
    let calories = Number(input[2]);
    

    let totalCalories = minWalk * walksDay * 5;
    let caloriesNeedd = calories / 2;

    if (totalCalories >= caloriesNeedd) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`);
    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`);
    }
}

catWalking(["30",
"3",
"600"])