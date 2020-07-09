import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { HomeView } from './views';
import './App.css';
import store from './redux';

function App() {
  return (
    <ReduxProvider store={store}>
      <HomeView />
    </ReduxProvider>
  );
}

export default App;
