function trekking(input) {
    let groups = Number(input[0]);
    let index = 1
    let humanCount = Number(input[index]);
    index++;
    let musala = 0;
    let monblan = 0;
    let kili = 0;
    let k2 = 0;
    let everest = 0;
    let count = 0;


    for (let i = 1; i <= groups; i++) {
        if (humanCount <= 5) {
            musala += humanCount;
            count += humanCount;
        } else if (humanCount <= 12) {
            monblan += humanCount;
            count += humanCount;
        } else if (humanCount <= 25) {
            kili += humanCount;
            count += humanCount;
        } else if (humanCount <= 40) {
            k2 += humanCount;
            count += humanCount;
        } else if (humanCount >= 41) {
            everest += humanCount;
            count += humanCount;
        }
        humanCount = Number(input[index]);
        index++
    }
    
    let musalaPercent = (musala / count) * 100;
    let monblanPercent = (monblan / count) * 100;
    let kiliPercent = (kili / count) * 100;
    let k2Percent = (k2 / count) * 100;
    let everestPercent = (everest / count) * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kiliPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);


}

trekking(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])