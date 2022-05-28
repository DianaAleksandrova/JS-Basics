function foodDelivery(input){
    let countChicken = Number(input[0]);
    let countFish = Number(input[1]);
    let countVegan = Number(input[2]);

    let priceChicken = countChicken * 10.35;
    let priceFish = countFish * 12.4;
    let priceVegan = countVegan * 8.15;
    let sum = priceChicken + priceFish + priceVegan;
    let sweet = sum * 0.2;
    let totalSum = sum + sweet + 2.5;
    console.log(totalSum);

}
foodDelivery(["2","4","3"])