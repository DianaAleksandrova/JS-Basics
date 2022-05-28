function repainting(input){
    let cover = Number(input[0]);
    let paint = Number(input[1]);
    let liquid = Number(input[2]);
    let hour = Number(input[3]);

    let sumCover = (cover + 2) * 1.5;
    let sumPaint = paint * 1.1 * 14.5;
    let sumLiquid = liquid * 5;

    let sum = sumCover + sumPaint + sumLiquid + 0.4;
    let cost = sum * 0.3 * hour;
    let totalSum = sum + cost;
    console.log(totalSum);
}
repainting(["10","11","4","8"])