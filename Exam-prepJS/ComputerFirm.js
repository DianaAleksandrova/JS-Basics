function computerFirm(input) {
    let n = Number(input[0]);
    let index = 1;
    let possibleSales = 0
    let sales = 0
    let rating = 0
    let countOfRating = 0
 
    for (let i = 0; i < n; i++) {
        let possibleSalesAndRating = input[index];
        index++;
        rating=Number(possibleSalesAndRating%10);
        countOfRating+=rating;
        possibleSales=Math.floor(possibleSalesAndRating/10);
        if (rating === 2) {
            sales += possibleSales * 0;
        }
        else if (rating === 3) {
            sales += possibleSales * 0.5;
        }
        else if (rating === 4) {
            sales += possibleSales * 0.7;
        }
        else if (rating === 5) {
            sales += possibleSales * 0.85;
        }
        else if (rating === 6) {
            sales += possibleSales * 1;
        }
    }
    console.log(`${sales.toFixed(2)}`);
    console.log(`${(countOfRating/n).toFixed(2)}`);
}
computerFirm(["3",
"103",
"103",
"103"])