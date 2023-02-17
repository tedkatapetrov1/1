function careOfPuppy(input) {
    let kilos = Number(input[0]);
    let index = 1;
    let grams = input[index];
    index++;

    let kilosInGrams = kilos * 1000;

    while (grams !== "Adopted") {
        let gramsEaten = Number(grams);

        if (gramsEaten >= 0) {
            kilosInGrams -= gramsEaten;
        }
        grams = input[index];
        index++;
    }
    if (kilosInGrams >= 0) {
        console.log(`Food is enough! Leftovers: ${kilosInGrams} grams.`);
    } else {
        
            console.log(`Food is not enough. You need ${Math.abs(kilosInGrams)} grams more.`);
    }
}

careOfPuppy(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])


