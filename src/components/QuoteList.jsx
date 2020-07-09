import React from 'react';

export default function QuoteList({ quotes }) {
  return (
    <ol>
      {quotes.map((quote) => (
        <li>{quote}</li>
      ))}
    </ol>
  );
}
