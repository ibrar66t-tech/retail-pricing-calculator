function calculateProfitPrice() {
    // 1. Get the values the user typed in
    const productCost = parseFloat(document.getElementById('cost').value);
    const desiredMarginPercent = parseFloat(document.getElementById('margin').value);
    const shippingCost = parseFloat(document.getElementById('shipping').value);

    // Basic validation check
    if (isNaN(productCost) || isNaN(desiredMarginPercent) || isNaN(shippingCost) || productCost <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    // 2. Perform the calculations using the business formula

    // The total operational cost (what you pay)
    const totalCost = productCost + shippingCost;
    
    // The margin is a percentage of the FINAL selling price, not the cost.
    // Standard Formula: Selling Price = Cost / (1 - Margin as a Decimal)
    
    // Convert percentage margin to a decimal (e.g., 40% becomes 0.40)
    const marginDecimal = desiredMarginPercent / 100;
    
    // Calculate the recommended selling price
    const sellingPrice = totalCost / (1 - marginDecimal);

    // Calculate the total profit in dollars
    const totalProfit = sellingPrice - totalCost;

    // 3. Display the results to the user
    // We use .toFixed(2) to format the numbers to always have 2 decimal places (like money)
    document.getElementById('result-selling-price').innerHTML = 
        `Recommended Selling Price: **$${sellingPrice.toFixed(2)}**`;
    
    document.getElementById('result-total-profit').innerHTML = 
        `Your Total Profit per Sale: **$${totalProfit.toFixed(2)}**`;
}