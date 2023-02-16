function change(input) {
    let bitcoin = Number(input[0]);
    let yuan = Number(input[1]);
    let commision = Number(input[2]);
    
    let sumBitcoin = bitcoin * 1168;
    let yuanSum = yuan * 0.15;
    let finalYuan = yuanSum * 1.76;

    let sum = (sumBitcoin + finalYuan) / 1.95;

    let finalCom = commision / 100;
    let afterComission = sum - (sum * finalCom);

    console.log(afterComission.toFixed(2));
}

change(["1",
"5",
"5"])
