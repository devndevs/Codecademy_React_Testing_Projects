require("@babel/core");
require("@babel/register");

const readline = require("readline");
const CurrencyComparison = require("./currency_comparison").default
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const responseText = (hourlyPay, currency) => {
  console.log(`Your hourly pay in USD would change from $${hourlyPay.USD}/hr to $${hourlyPay[currency]}/hr if you were paid ${hourlyPay.salary} ${currency} instead of ${hourlyPay.salary} USD`);
}

rl.question("Enter a yearly salary in USD: ", function(salary){
    if (isNaN(salary)) {
        console.log('Please try again with only enter in numeric characters.')
        rl.close()
    }  
    const curSalary = new CurrencyComparison(salary)
    rl.question("Enter a three-letter ISO currency code (MXN, EUR, or CAD) to compare your hourly pay in a different currency: ", async function(currency) {
        const cur = currency.toUpperCase()
        try {
            const rates = await curSalary.fetchCurrentExchange()
            if (!Object.keys(rates[0]).includes(cur) && cur !== 'EUR') {
                console.log("Sorry, but it doesn't seem that we have currency exchange info for that currency.")
                rl.close()
            }
            const exchangeRate = curSalary.currencyConversion(rates[0], cur)
            curSalary.response(cur, exchangeRate, responseText)
                rl.close()
        } catch (error) {
            console.log(error);
            rl.close()
        }
    })
});

rl.on("close", () => {
    process.exit(0)
})