function suitcase(input) {
    let capacity = Number(input[0]);
    let index = 1;
    let luggage = input[index];
    index++;
    let statistic = 0;

    while (luggage !== "End") {
        luggage = Number(luggage);

        if (luggage <= capacity) {
            statistic++;
            if (statistic === 3) {
                capacity = (capacity - (luggage + (luggage * 0.10))).toFixed(1);
            } else {
                capacity = (capacity - luggage).toFixed(1);
            }
        } else if (luggage > capacity) {
            console.log("No more space!");
            capacity -= luggage;
            break;

        }
        luggage = input[index];
        index++;
    }
    if (capacity >= 0) {
        console.log("Congratulations! All suitcases are loaded!");
    }
    console.log(`Statistic: ${statistic} suitcases loaded.`);
}

suitcase(["550",
"100",
"252",
"72",
"End"])
