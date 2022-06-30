function finalCompetition(input){
    let countDancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let country = input[3]

    let sum = countDancers * points;
    let sumAfterCost = 0;

        if(country === `Bulgaria`){
            if(season === `summer`){
                sumAfterCost = sum * 0.95;
            }else if(season == `winter`){
                sumAfterCost = sum * 0.92;
            }
        }else if(country === `Abroad`){
            sum *= 1.5;
            if(season === `summer`){
                sumAfterCost = sum *0.9;
        
            }else if(season == `winter`){
                sumAfterCost = sum * 0.85;
        }
    }
     let charity = sumAfterCost * 0.75;
     let leftMoney = sumAfterCost - charity;
     let moneyProDancer = leftMoney / countDancers;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyProDancer.toFixed(2)}`);
}
finalCompetition(["25",
"98",
"winter",
"Bulgaria"])