import CurrencyComparison from '../currency_comparison';

// Task 14: Import and mock fetchData

const testSalary = new CurrencyComparison(50000)
    
// Task 4: Create a test for testSalary.currencyConversion below


// Task 8: Create a test for testSalary.hourlyPayUSD below



// Task 9: Complete this test!
test("respond with different salaries based on currency", () => {
  //arrange
  const currency = "CAD"
  const exchangeRate = 1.21
  const expectedValue = {
    USD: 25,
    CAD: 20.66,
    salary: 50000,
  }

  //act
  testSalary.response(currency, exchangeRate, (result) => {
    //assertions
    
  })
})

// Task 11: Complete this test!
test("Receives current currency exchange data", ()=>{
  //arrange
  const expectedValue = 200;
  //act
  const actualValue = testSalary.fetchCurrentExchange();

  //assertions

})

// Task 15: Complete this test!
test("Receives current currency exchange data", async ()=>{
  //arrange
  const mockResponse = {
    status : "Mock",
    data: {
      "base": "USD",
      "rates": {
        "CCD": 50,
      },
      "date": "2021-05-17"
    }
  }
  const expectedValue = [{"CCD": 50}, "Mock"];

  // Mock the resolved value of fetchData

  
  //act
  const actualValue = await testSalary.fetchCurrentExchange() 
  
  //assertions
 
})