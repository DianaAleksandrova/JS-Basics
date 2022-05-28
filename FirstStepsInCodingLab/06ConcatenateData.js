function concatenateData(input){
    let arr = [input[0],input[1],input[2],input[3]];
    let firstName = arr[0];
    let lastName = arr[1];
    let age = arr[2];
    let town = arr[3];
    console.log("You are " + firstName + " " + lastName + ", a " + age + "-years old person from " + town + ".");

}
concatenateData(["Maria","Ivanova","20","Sofia"])