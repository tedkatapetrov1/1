function fitnessCard(input) {
    let sumAvailable = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sport = input[3];
    let price = 0;

    if (sex === "m") {
        switch (sport) {
            case "Gym":
                price = 42;
                break;
            case "Boxing":
                price = 41;
                break;
            case "Yoga":
                price = 45;
                break;
            case "Zumba":
                price = 34;
                break;
            case "Dances":
                price = 51;
                break;
            case "Pilates":
                price = 39;
                break;

            default:
                break;
        }
    } else if (sex === "f") {
        switch (sport) {
            case "Gym":
                price = 35;
                break;
            case "Boxing":
                price = 37;
                break;
            case "Yoga":
                price = 42;
                break;
            case "Zumba":
                price = 31;
                break;
            case "Dances":
                price = 53;
                break;
            case "Pilates":
                price = 37;
                break;

            default:
                break;
        }
    }

    if (age <= 19) {
        price = price * 0.80;
    }

    if (price <= sumAvailable) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    }else{
        let neededMoney = price - sumAvailable;
        console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`);
    }
}

fitnessCard(["20",
"f",
"15",
"Yoga"])

