import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { quoteAPI } from '../utils';
import { addKanyeQuote } from '../redux/action';

export default function KanyeQuoteView() {
  const dispatch = useDispatch();
  const [currentKanyeQuote, setCurrentKanyeQuote] = useState('');

  const fetchKanyeQuote = useCallback(async () => {
    try {
      const { data } = await quoteAPI.get();
      setCurrentKanyeQuote(data.quote);
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  useEffect(() => {
    fetchKanyeQuote();
  }, [fetchKanyeQuote]);

  const addFavoriteKanyeQuote = () => {
    currentKanyeQuote.length > 0 && dispatch(addKanyeQuote(currentKanyeQuote));
  };

  return (
    <section>
      <h1>Kanye-West Quote</h1>
      <h2>{currentKanyeQuote.length > 0 && currentKanyeQuote}</h2>
      <button onClick={() => fetchKanyeQuote()}>Get Quote</button>
      <button onClick={() => addFavoriteKanyeQuote()}>Add Favorite</button>
    </section>
  );
}
