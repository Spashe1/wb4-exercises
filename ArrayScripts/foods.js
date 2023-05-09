
function getMealCost(lunch){
let sum=0;
let lunchCost = lunch.length;
for(let i = 0; i < lunchCost; i++){
    sum += lunch[i].price;
}
return sum;
}
let mylunch = [
    {item: "Burger", price: 9.95},
    {item: "Pizza", price: 6.25},
    {item: "Coca Cola", price: 2.79}
    ];
let mealCost = getMealCost(mylunch);
let tax = mealCost * 0.8;
let tip = mealCost * 0.18;
let totalDue = mealCost + tax + tip;

console.log("Meal cost:$" + mealCost.toFixed(2));
console.log("tax:$" +tax.toFixed(2));
console.log("Tip:$" + tip.toFixed(2));
console.log("Total Due:$" + totalDue.toFixed(2));

