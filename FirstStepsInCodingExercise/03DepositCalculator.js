function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let months = Number(input[1]);
    let procent = Number(input[2]);

    let interestRate = depositSum * procent / 100;
    let interestPerMonth = interestRate / 12;
    let totalSum = depositSum + months * interestPerMonth;
    console.log(totalSum);
}
depositCalculator(["200","3","5.7"])