const fetchData = jest.fn(() =>{
    return Promise.resolve({
     status: "Mock",
     data: {}
     })
   })

export default fetchData