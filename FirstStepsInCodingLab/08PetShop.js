function petShop(input){
    let foodDog = parseInt(input[0]);
    let foodCat = parseInt(input[1]);
    let totalSumDog = foodDog * 2.5;
    let totalsumCat = foodCat * 4;
    let totalSum = totalSumDog + totalsumCat;
    console.log(totalSum + " lv.")
}
petShop([5,4])