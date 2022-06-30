function footballKit(input){
    let priceTshirt = Number(input[0]);
    let neededSum = Number(input[1])

    let short = priceTshirt * 0.75;
    let socks = short * 0.2;
    let shoes = (short + priceTshirt) * 2;

    let sum = priceTshirt + short + socks + shoes;
    let totalSumWithdiscount = sum * 0.85;

    if(totalSumWithdiscount >= neededSum){
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log (`His sum is ${totalSumWithdiscount.toFixed(2)} lv.`);
    }else{
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(neededSum - totalSumWithdiscount).toFixed(2)} lv. more.`);
    }
}
footballKit(["55",
"310"])