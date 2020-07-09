import React from 'react';

import KanyeQuoteView from './KanyeQuoteView';
import PersonalQuoteView from './PersonalQuoteView';

export default function HomeView() {
  return (
    <main>
      <KanyeQuoteView />
      <PersonalQuoteView />
    </main>
  );
};
