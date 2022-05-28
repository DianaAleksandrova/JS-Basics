function basketballEquipment(input) {
    let money = Number(input[0]);

    let shoes = money - (money * 0.4);
    let outfit = shoes - (shoes * 0.2);
    let ball = outfit / 4;
    let accessory = ball / 5;
    let totalSum = money + shoes + outfit + ball + accessory;
    console.log(totalSum);
}
basketballEquipment(["365"])