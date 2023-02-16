function run(input) {
    let record = Number(input[0]);
    let meters = Number(input[1]);
    let secondPerMeter = Number(input[2]);
    
    let timeForMeters = meters * secondPerMeter;
    let delay = (Math.floor(meters / 50)) * 30;

    let totalTime = timeForMeters + delay;

    if (totalTime < record) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    }else {
        let neededSeconds = totalTime - record;
        console.log(`No! He was ${neededSeconds.toFixed(2)} seconds slower.`);
    }
}

run(["1377",
"389",
"3"])


