export const addPersonalQuote = (personalQuote) => ({
  type: 'ADD_PERSONAL_QUOTE',
  payload: {
    personalQuote,
  },
});

export const addKanyeQuote = (kanyeQuote) => ({
  type: 'ADD_KANYE_QUOTE',
  payload: {
    kanyeQuote,
  },
});
