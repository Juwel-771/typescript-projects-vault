type InvestmentData = {
    investmentAmount : number,
    annualContribution: number,
    expectedReturn: number,
    duration: number
}

function calculateInvestment(data:InvestmentData) {}

function printResult(results){
    // print (output) the result data
}

const results = calculateInvestment(...);

printResult(results)