function projectsCreation(input){
    let name = input[0];
    let countProject = parseInt(input[1]);
    let needTime = countProject * 3;
    console.log("The architect " + name +" will need " + needTime + " hours to complete " + 
    countProject +" project/s.");
}
projectsCreation(["George ",4])