function booster(input) {
    let fruit = input[0];
    let size = input[1];
    let sets = Number(input[2]);
    let price = 0;

    switch (fruit) {
        case "Watermelon":
            if (size === "small") {
                price = (sets * 56) * 2;
            } else if (size === "big") {
                price = (sets * 28.70) * 5;
            }
            break;
        case "Mango":
            if (size === "small") {
                price = (sets * 36.66) * 2;
            } else if (size === "big") {
                price = (sets * 19.60) * 5;
            }
            break;
        case "Pineapple":
            if (size === "small") {
                price = (sets * 42.10) * 2;
            } else if (size === "big") {
                price = (sets * 24.80) * 5;
            }
            break;
        case "Raspberry":
            if (size === "small") {
                price = (sets * 20) * 2;
            } else if (size === "big") {
                price = (sets * 15.20) * 5;
            }
            break;

        default:
            break;
    }
    if (price >= 400 && price <= 1000) {
        price = price * 0.85;
    }else if (price > 1000) {
        price = price * 0.50
    }

    console.log(`${price.toFixed(2)} lv.`);

}

booster(["Watermelon",
    "big",
    "4"])