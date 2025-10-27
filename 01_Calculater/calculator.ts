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

function printResult(results:calculateInvestmentResult){
    // print (output) the result data
    if(typeof results === 'string'){
        console.log(results);
        return;
    }

    for(const yearEndResult of results){
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contribution: ${yearEndResult.totalContribution.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarning.toFixed(0)}`);
        console.log("-------------------------------------------------");
    }
}

const results = calculateInvestment(...);

printResult(results)