export default {
    get: () => {
      const res = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
        status: 200,
        data: {
          "base": "USD",
          "rates": {
            "MXN": 19.9021,
            "CAD": 1.2121, 
            "EUR": .8235  
          },
          "date": new Date().toISOString()
        }
      })
        }, 3000) 
      })
      return res
    }      
  }