function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let procent = Number(input[3]);

    let capacity = length * width * height;
    let volume = capacity / 1000;
    let totalVolume = volume - (volume * procent) / 100;
    console.log(totalVolume);
}
fishTank(["85","75","47","17"])