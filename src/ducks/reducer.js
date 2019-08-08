// INITIAL STATE
const initialState = {
    username: "",
    email: "",
    accountBalance: 0,
    transaction: []
  };
  // ACTION CONSTANST
  
  //ACTION BUILDERS
  
  //REDUCER
  export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      default:
        return state;
    }
  };