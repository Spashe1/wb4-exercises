let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Sour Patch Kids", price: 3.49},
    {product: "Skittles", price: 4.99},
    {product: "Hershey's Kisses", price: 3.59},
    {product: "KitKat", price: 2.49},
    {product: "M&M's Peanut Butter", price: 3.29},
    {product: "Reese's Pieces", price: 4.29}
  ];
  
  // Find candies that cost less than $4.00
  let lessThanFour = products.filter(item => item.price < 4.00);
  console.log("Candies that cost less than $4.00:", lessThanFour);
  
  // Find candies with "M&M" in its name
  let mMItems = products.filter(item => item.product.includes("M&M"));
  console.log("Candies with 'M&M' in its name:", mMItems);
  
  // Check if we carry "Swedish Fish"
  let swedishFish = products.find(item => item.product === "Swedish Fish") !== undefined;
  console.log("Do we carry 'Swedish Fish'?", swedishFish);
  
  
  
  