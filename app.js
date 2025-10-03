function calculateAdvancedProfit() {
    // 1. Get the values the user typed in
    const productCost = parseFloat(document.getElementById('cost').value);
    const desiredMarginPercent = parseFloat(document.getElementById('margin').value);
    const shippingCost = parseFloat(document.getElementById('shipping').value);
    // NEW: Get the tax value
    const salesTaxPercent = parseFloat(document.getElementById('tax').value);


    // Basic validation check
    if (isNaN(productCost) || isNaN(desiredMarginPercent) || isNaN(shippingCost) || isNaN(salesTaxPercent) || productCost <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    // 2. Perform the core calculations

    // Calculate Selling Price BEFORE Tax (using the standard margin formula)
    const totalCost = productCost + shippingCost;
    const marginDecimal = desiredMarginPercent / 100;
    const sellingPriceBeforeTax = totalCost / (1 - marginDecimal);

    // Calculate Total Profit
    const totalProfit = sellingPriceBeforeTax - totalCost;

    // 3. Calculate Final Customer Price (including tax)
    const taxDecimal = salesTaxPercent / 100;
    const taxAmount = sellingPriceBeforeTax * taxDecimal;
    const finalCustomerPrice = sellingPriceBeforeTax + taxAmount;


    // 4. Display the results to the user
    document.getElementById('result-selling-price').innerHTML = 
        `Recommended Price **(Before Tax)**: **$${sellingPriceBeforeTax.toFixed(2)}**`;
    
    document.getElementById('result-final-price').innerHTML = 
        `Final Customer Price **(Total)**: **$${finalCustomerPrice.toFixed(2)}**`;
    
    document.getElementById('result-total-profit').innerHTML = 
        `Your Total Profit per Sale: **$${totalProfit.toFixed(2)}**`;
}
