import React from 'react';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Header />
        <Content />
      </SearchProvider>
    </div>
  );
}

export default App;
