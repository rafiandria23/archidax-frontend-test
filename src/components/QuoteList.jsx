import React from 'react';

export default function QuoteList({ quotes }) {
  return (
    <ol>
      {quotes.map((quote, idx) => (
        <li key={idx}>{quote}</li>
      ))}
    </ol>
  );
}
