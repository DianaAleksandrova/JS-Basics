function suppliesForSchool(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let liquid = Number(input[2]);
    let discount = Number(input[3]);

    let sumPens = pens * 5.8;
    let sumMarkers = markers * 7.2;
    let sumLiquid = liquid * 1.2;
    let totalSum = sumPens + sumMarkers + sumLiquid;
    let totalSumWithDiscount = totalSum - (totalSum * discount) / 100;
    console.log(totalSumWithDiscount);
}
suppliesForSchool(["2","3","4","25"])