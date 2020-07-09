import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { QuoteList } from '../components';
import { addPersonalQuote } from '../redux/action';

export default function PersonalQuoteView() {
  const dispatch = useDispatch();
  const personalQuoteList = useSelector((state) => state.personalQuotes);
  const [myQuoteInputValue, setMyQuoteInputValue] = useState('');

  const submitNewPersonalQuote = (e) => {
    e.preventDefault();
    const samePersonalQuote = personalQuoteList.filter(
      (personalQuote) => personalQuote === myQuoteInputValue
    );
    if (myQuoteInputValue.length > 0 && !samePersonalQuote.length) {
      dispatch(addPersonalQuote(myQuoteInputValue));
      setMyQuoteInputValue('');
    }
  };

  return (
    <section>
      <h2>My Quotes</h2>
      <form onSubmit={submitNewPersonalQuote}>
        <input
          value={myQuoteInputValue}
          onChange={(e) => setMyQuoteInputValue(e.target.value)}
        />
        <button
          type={`submit`}
          onSubmit={submitNewPersonalQuote}
          onClick={submitNewPersonalQuote}
        >
          Submit
        </button>
      </form>
      {personalQuoteList.length > 0 && <QuoteList quotes={personalQuoteList} />}
    </section>
  );
}
