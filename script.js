function calculateLoan() {
    var loanAmount = parseFloat(document.getElementById("loanAmount").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var loanTerm = parseFloat(document.getElementById("loanTerm").value);
  
    var monthlyInterestRate = interestRate / 100 / 12;
    var monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
    var totalPayment = monthlyPayment * loanTerm;
    var totalInterest = totalPayment - loanAmount;
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "<p class='result-label'>Monthly Payment:</p><p class='result-value'>$" + monthlyPayment.toFixed(2) + "</p>" +
                               "<p class='result-label'>Total Payment:</p><p class='result-value'>$" + totalPayment.toFixed(2) + "</p>" +
                               "<p class='result-label'>Total Interest:</p><p class='result-value'>$" + totalInterest.toFixed(2) + "</p>";
  }
  