import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { quoteAPI } from '../utils';
import { addKanyeQuote } from '../redux/action';
import { QuoteList } from '../components';

export default function KanyeQuoteView() {
  const dispatch = useDispatch();
  const [currentKanyeQuote, setCurrentKanyeQuote] = useState('');
  const kanyeQuoteList = useSelector((state) => state.kanyeQuotes);

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
  }, []);

  const addFavoriteKanyeQuote = () => {
    const sameKanyeQuote = kanyeQuoteList.filter(
      (kanyeQuote) => kanyeQuote === currentKanyeQuote
    );
    if (!sameKanyeQuote.length) {
      dispatch(addKanyeQuote(currentKanyeQuote));
    }
  };

  return (
    <section>
      <h1>Kanye-West Quote</h1>
      <h3>{currentKanyeQuote.length > 0 && currentKanyeQuote}</h3>
      <button onClick={() => fetchKanyeQuote()}>Get Quote</button>
      <button onClick={() => addFavoriteKanyeQuote()}>Add Favorite</button>
      {kanyeQuoteList.length > 0 && <QuoteList quotes={kanyeQuoteList} />}
    </section>
  );
}
