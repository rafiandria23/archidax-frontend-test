const initialState = {
  personalQuotes: [],
  kanyeQuotes: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PERSONAL_QUOTE':
      return {
        ...state,
        personalQuotes: state.personalQuotes.concat(
          action.payload.personalQuote
        ),
      };

    case 'ADD_KANYE_QUOTE':
      return {
        ...state,
        kanyeQuotes: state.kanyeQuotes.concat(action.payload.kanyeQuote),
      };

    default:
      return state;
  }
}
