function tournament(input) {
    let days = Number(input[0]);
    let index = 1;
    let game = input[index];
    index++;
    let type = input[index];
    index++

    let moneyDayOne = 0;
    let finalMoney = 0;
    let wins = 0;
    let losses = 0;
    let totalWins = 0;
    let totalLooses = 0;


    for (let i = days; i > 0; i--) {
        while (game !== "Finish") {
            if (type === "win") {
                moneyDayOne = moneyDayOne + 20;
                wins++;
            } else if (type === "lose") {
                losses++;
            }
            game = input[index];
            index++;
            if (game === "Finish") {
                break;
            }
            type = input[index];
            index++
        }
        if (wins > losses) {
            moneyDayOne = moneyDayOne + (moneyDayOne * 0.10);
            totalWins++
        } else {
            totalLooses++;
        }
        game = input[index];
        index++;
        type = input[index];
        index++

        finalMoney += moneyDayOne;
        wins = 0;
        losses = 0;
        moneyDayOne = 0;
    }
    if (totalWins > totalLooses) {
        finalMoney = finalMoney + (finalMoney * 0.20);
        console.log(`You won the tournament! Total raised money: ${finalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${finalMoney.toFixed(2)}`);
    }
}

tournament(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])

