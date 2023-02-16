function birthday(input) {
    let priceHall = Number(input);
    let cake = priceHall * 0.20;
    let drinks = cake * 0.55;
    let anime = priceHall / 3;

    let total = priceHall + cake + drinks + anime;

    console.log(total);
}

birthday(["2250"]);