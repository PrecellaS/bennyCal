const loanAmountInput = document.querySelector(".loan-amount");
const totalAmountValue = document.querySelector(".total-amount .value");
const calculateBtn = document.querySelector(".calculate-btn");

// Function to calculate final total
const calculateFinalTotal = () => {
    const inputValue = parseFloat(loanAmountInput.value);
    const total_A = inputValue + 7;
    const total_B = total_A * 2;
    const total_C = total_B + 10;
    const total_D = total_C / 39.25;
    const finalTotal = total_D + 0.25;
    return finalTotal;
};

// Function to update the result on the page
const updateResult = () => {
    const finalTotal = calculateFinalTotal();
    totalAmountValue.textContent = finalTotal.toFixed(2); // Display result with 2 decimal places
};

// Event listener for the button click
calculateBtn.addEventListener("click", () => {
    updateResult();
});

// Initial update of the result when the page loads
updateResult();
