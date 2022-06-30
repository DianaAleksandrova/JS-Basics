function catDiet(input){
    let fatProcent = Number(input[0]);
    let proteinProcent = Number(input[1]);
    let carbohydrateProcent = Number(input[2]);
    let totalCalorie = Number(input[3]);
    let waterProcent = Number(input[4]);

    let fatGram = ((totalCalorie * fatProcent) / 100) / 9;
    let proteinGram = ((totalCalorie * proteinProcent) / 100) / 4;
    let carbohydrateGram = ((totalCalorie * carbohydrateProcent) / 100) / 4;

    let foodWeight = fatGram + proteinGram + carbohydrateGram;
    let caloriePerGram = totalCalorie / foodWeight;
    let waterInFood = 100 - waterProcent;
    let waterPerGram = (waterInFood *caloriePerGram) /100;


    console.log(waterPerGram.toFixed(4));
}
catDiet(["20",
"60",
"20",
"1800",
"50"])