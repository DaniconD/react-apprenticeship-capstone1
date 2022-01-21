import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <BrowserRouter>
          <Header />
          <Content />
        </BrowserRouter>
      </SearchProvider>
    </div>
  );
}

export default App;
