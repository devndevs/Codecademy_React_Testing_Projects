const response = {
    status: "Mock",
    data: {}
  };
  
  export default jest.fn(() => Promise.resolve(response));