type InvestmentData = {
    investmentAmount : number,
    annualContribution: number,
    expectedReturn: number,
    duration: number
}

type InvestmentResult = {
    year: string,
    totalAmount: number,
    totalContribution: number,
    totalInterestEarning: number
}

type calculateInvestmentResult = InvestmentResult [] | string;

function calculateInvestment(data:InvestmentData) : calculateInvestmentResult[] {
    
}


function printResult(results){
    // print (output) the result data
}

const results = calculateInvestment(...);

printResult(results)