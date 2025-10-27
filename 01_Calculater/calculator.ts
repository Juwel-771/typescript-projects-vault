type InvestmentData = {
    investmentAmount : number,
    initialAmount: number,
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

function calculateInvestment(data:InvestmentData) : calculateInvestmentResult {
    const {initialAmount, annualContribution, expectedReturn, duration} = data;

    if(initialAmount < 0){
        return 'Initial investment must be at leas 0';
    }
    
    if(duration <=0){
        return 'No valid amount of year are provided';
    }

    if(expectedReturn < 0){
        return 'Expected return must be at least zero';
    }

    let total = initialAmount;
    let totalContribution = 0;
    let totalInterestEarning = 0;

    const annualResult : InvestmentResult[] = [];

    for(let i = 0; i < duration; i++){
        total = total * (1 + expectedReturn);
        totalInterestEarning = total - totalContribution - initialAmount;
        totalContribution = totalContribution + annualContribution;
        total = total+annualContribution;

        annualResult.push({
            year: `Year ${i+1}`,
            totalAmount: total,
            totalInterestEarning,
            totalContribution
        });
    }

    return annualResult;

}


function printResult(results){
    // print (output) the result data
}

const results = calculateInvestment(...);

printResult(results)