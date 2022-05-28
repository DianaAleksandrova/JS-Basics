function vacationBooksList(input){
    let countPage = Number(input[0]);
    let pagesProHour = Number(input[1]);
    let countDays = Number(input[2]);

    let totalTime = countPage / pagesProHour;
    let neededTime = totalTime / countDays;
    console.log(neededTime);
}
vacationBooksList(["212","20","2"])