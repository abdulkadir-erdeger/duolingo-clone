export default (state, action) => {
  switch (action.type) {
    case "ADD_LIST":
      const newWordList = action.payload;
      return {
        wordList: newWordList,
      };

    default:
      return state;
  }
};
