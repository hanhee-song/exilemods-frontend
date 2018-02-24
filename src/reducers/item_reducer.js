const initialState = {};

const ItemReducer = (state = initialState, action) => {
  Object.freeze(state);
  // TODO
  switch (action.type) {
    // case expression:
    //
    //   break;
    default:
      return state;
  }
};

export default ItemReducer;

// ItemReducer is where all the data from the back end is cached.
// It does not dictate what is displayed - CurrentItemReducer is in
// charge of that.
