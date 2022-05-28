function yardGreening(input){
    let yard = Number(input);
    let totalPrice = yard * 7.61;
    let discount = totalPrice * 0.18;
    let priceWithDiscount = totalPrice - discount;
    console.log("The final price is: " + priceWithDiscount + " lv.");
    console.log("The discount is: " + discount + " lv.");
}
yardGreening(550)