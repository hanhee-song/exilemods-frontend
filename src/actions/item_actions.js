export const RECEIVE_CURRENT_ITEM = "RECEIVE_CURRENT_ITEM";

export const receiveCurrentItem = (item) => {
  // item: {
  //   category: String,
  //   item: String,
  //   tagIds: Array,
  // }
  return {
    type: RECEIVE_CURRENT_ITEM,
    item,
  };
};


// NB: In the future, I may differentiate between RECEIVE_CURRENT_ITEM
// and RECEIVE_ITEM. If I do, RECEIVE_CURRENT_ITEM will be strictly
// for the front end to update the current item state while RECEIVE_ITEM
// will be to update the data store (the actual ajax call). This will
// prevent potential weird async stuff that arises from someone
// rapidly clicking on multiple categories.

export const fetchItem = (item) => {
  return (dispatch) => {
    // return ItemUtil.fetchItem(item)
    //   .then(
    //     (item) => dispatch(receiveCurrentItem(item))
    //   );
  };
};
